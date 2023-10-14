import { Injectable } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { CreateUserDto, UserOutputDto } from "src/modules/user/dtos";
import { User } from "src/modules/user/entity";
import { UserService } from "src/modules/user/providers";
import { BaseApiResponse } from "src/shared/dtos";

@Injectable()
export class AuthServie {
    constructor(
        private readonly userService: UserService,

    ) { }
    public async register(
        userInfo: CreateUserDto
    ): Promise<BaseApiResponse<CreateUserDto>> {
        // try {
            const createdUser = await this.userService.createUser(userInfo);
            return plainToInstance(BaseApiResponse<CreateUserDto>, {
                error: false,
                data: {
                    //   token: jwt.accessToken,
                    //   refreshToken: jwt.refreshToken,
                    //   infoUser: userOutput,
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
}