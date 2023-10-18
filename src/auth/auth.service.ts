import { Injectable } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { CreateUserDto, UserOutputDto } from "src/modules/user/dtos";
import { User } from "src/modules/user/entity";
import { UserService } from "src/modules/user/providers";
import { BaseApiResponse } from "src/shared/dtos";
import { JwtPayload, Payload, RefreshTokenPayload } from "./auth.interface";
import { JwtService } from "@nestjs/jwt";
import { generateCode } from "src/shared/utils/user.util";
import { MailService } from "src/shared/providers";
import { MAIL_TEMPLATE } from 'src/common/constants/common';


@Injectable()
export class AuthServie {
    constructor(
        private jwt: JwtService,
        private readonly userService: UserService,
        private readonly mailService: MailService
    ) { }
    public async register(
        userInfo: CreateUserDto
    ): Promise<BaseApiResponse<CreateUserDto>> {
        // try {
        const createdUser = await this.userService.createUser(userInfo);
        const jwt = this.generateToken(createdUser);
        const emailVerifyCode = generateCode();
        

        await this.userService.update(+createdUser.id, {
            refreshToken: jwt.refreshToken,
            emailVerifyCode: emailVerifyCode,
        });
        this.sendEmailVerification(createdUser);
        return plainToInstance(BaseApiResponse<CreateUserDto>, {
            error: false,
            data: {
                //   token: jwt.accessToken,
                //   refreshToken: jwt.refreshToken,
                //   infoUser: UserOutputDto, 
            },
            message: '',
            code: 200,
        });
        // } catch (error) {
        //     return plainToInstance(BaseApiResponse<CreateUserDto>, {
        //         error: true,
        //         data: null,
        //         message: 'Create user faild !',
        //         code: 200,
        //     });
        // }


    }
    public generateToken(user: User | UserOutputDto): {
        accessToken: string;
        refreshToken: string;
    } {
        return {
            accessToken: this.generateAccessToken({
                id: user.id,
                email: user.email,
                roles: user.roles
            }),
            refreshToken: this.generateRefreshToken({
                sub: user.id
            }),
        };
    }
    public generateAccessToken(data: Payload): string {
        const payload: JwtPayload = {
            sub: data.id,
            email: data.email,
            roles: data.roles,
        };
        return this.jwt.sign(payload);
    }
    public generateRefreshToken(data: RefreshTokenPayload): string {
        return this.jwt.sign(data);
    }

    public sendEmailVerification(user: User | UserOutputDto) {
        const subject = 'Thông tin tài khoản';
        const context = {
            fullname: user.fullname,
            verifyCode: user.emailVerifyCode,
        };
        this.mailService
            .sendMail(
                user.email,
                subject,
                context,
                MAIL_TEMPLATE.VERIFY_EMAIL_TEMPLATE,
            )
            .then(() => {
                return true;
            }
            );
    }
}