// import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import { plainToInstance } from 'class-transformer';
// import { MAIL_TEMPLATE, MESSAGES } from 'src/common/constants/common';
// import { User } from '../modules/user/entity';
// import { BaseApiResponse } from 'src/shared/dtos';
// import { generateCode } from '../shared/utils/user.util';
// import { UserOutputDto } from '../modules/user/dtos/user-output.dto';
// import { UserService } from '../modules/user/providers';
// import { MailService } from '../shared/providers';
// import { JwtPayload, Payload, RefreshTokenPayload } from './auth.interface';
// import { ForgotPassword, RegisterInput } from './dtos';
// import { LoginInput } from './dtos/auth-login-input.dto';
// import { ConfigService } from '@nestjs/config';

// @Injectable()
// export class AuthService {
//   constructor(
//     private jwt: JwtService,
//     private config: ConfigService,
//     private readonly userService: UserService,
//     private readonly mailService: MailService,
//   ) {}

//   public async register(
//     data: RegisterInput,
//   ): Promise<BaseApiResponse<UserOutputDto>> {
//     const createdUser = await this.userService.create(data);
//     const jwt = this.generateToken(createdUser);
//     const emailVerifyCode = generateCode();

//     // await this.userService.update(createdUser.id, {
//     //   refreshToken: jwt.refreshToken,
//     //   emailVerifyCode: emailVerifyCode,
//     // });
//     // createdUser.emailVerifyCode = emailVerifyCode;
//     // this.sendEmailVerification(createdUser);
//     const userOutput = plainToInstance(UserOutputDto, createdUser, {
//       excludeExtraneousValues: true,
//     });
//     return plainToInstance(BaseApiResponse<UserOutputDto>, {
//       error: false,
//       data: {
//         token: jwt.accessToken,
//         refreshToken: jwt.refreshToken,
//         infoUser: userOutput,
//       },
//       message: MESSAGES.CREATED_SUCCEED,
//       code: 200,
//     });
//   }

// //   public async login(
// //     data: LoginInput,
// //   ): Promise<BaseApiResponse<UserOutputDto>> {
// //     const user = await this.userService.validateUser(data);
// //     if (!user.isVerifyEmail)
// //       throw new HttpException(
// //         {
// //           error: true,
// //           data: null,
// //           message: MESSAGES.UNCONFIRMED_ACCOUNT,
// //           code: 400,
// //         },
// //         HttpStatus.BAD_REQUEST,
// //       );
// //     const jwt = this.generateToken(user);
// //     await this.userService.update(user._id, {
// //       refreshToken: jwt.refreshToken,
// //     });
// //     return plainToInstance(BaseApiResponse<UserOutputDto>, {
// //       error: false,
// //       data: {
// //         token: jwt.accessToken,
// //         refreshToken: jwt.refreshToken,
// //         infoUser: user,
// //       },
// //       message: MESSAGES.UPDATE_SUCCEED,
// //       code: 200,
// //     });
// //   }

//   public generateToken(user: User | UserOutputDto): {
//     accessToken: string;
//     refreshToken: string;
//   } {
//     return {
//       accessToken: this.generateAccessToken({
//         id: user._id,
//         email: user.email,
//         roles: user.roles,
//       }),
//       refreshToken: this.generateRefreshToken({
//         sub: user._id,
//       }),
//     };
//   }

// //   async refreshToken(
// //     userId: string,
// //     token: string,
// //   ): Promise<BaseApiResponse<UserOutputDto>> {
// //     const user = await this.userService.getUserByUserId(userId);
// //     if (!user)
// //       throw new HttpException(
// //         {
// //           error: true,
// //           data: null,
// //           message: MESSAGES.NOT_FOUND_USER,
// //           code: 400,
// //         },
// //         HttpStatus.BAD_REQUEST,
// //       );
// //     const userOutput = plainToInstance(UserOutputDto, user, {
// //       excludeExtraneousValues: true,
// //     });
// //     const isValid = this.validateRefreshToken(user, token);
// //     if (!isValid)
// //       throw new HttpException(
// //         {
// //           error: true,
// //           data: null,
// //           message: MESSAGES.INVALID_TOKEN,
// //           code: 400,
// //         },
// //         HttpStatus.BAD_REQUEST,
// //       );
// //     const jwt = this.generateToken(user);
// //     await this.userService.update(user._id, {
// //       refreshToken: jwt.refreshToken,
// //     });
// //     return plainToInstance(BaseApiResponse<UserOutputDto>, {
// //       error: false,
// //       data: {
// //         token: jwt.accessToken,
// //         refreshToken: jwt.refreshToken,
// //         infoUser: userOutput,
// //       },
// //       message: MESSAGES.UPDATE_SUCCEED,
// //       code: 200,
// //     });
// //   }

// //   public async forgotPassword(
// //     data: ForgotPassword,
// //   ): Promise<BaseApiResponse<UserOutputDto>> {
// //     const { email } = data;
// //     const user = await this.userService.getUserByEmail(email);

// //     if (!user)
// //       throw new HttpException(
// //         {
// //           error: true,
// //           data: null,
// //           message: MESSAGES.NOT_FOUND_USER,
// //           code: 404,
// //         },
// //         HttpStatus.BAD_REQUEST,
// //       );
// //     const emailVerifyCode = generateCode();
// //     await this.userService.update(user._id, {
// //       emailVerifyCode: emailVerifyCode,
// //     });
// //     user.emailVerifyCode = emailVerifyCode;
// //     this.sendForgotPassword(user);
// //     const result = plainToInstance(UserOutputDto, user, {
// //       excludeExtraneousValues: true
// //     });
// //     return {
// //       error: false,
// //       data: result,
// //       message: MESSAGES.SENT_EMAIL_TO_RECOVER_PASSWORD,
// //       code: 200,
// //     };
// //   }

// //   public validateRefreshToken(user: User, refreshToken: string): boolean {
// //     const verified = this.jwt.verify(refreshToken, {
// //       secret: this.config.get<string>('jwt.privateKey'),
// //     });
// //     if (!verified.sub || !user.refreshToken) {
// //       return false;
// //     }
// //     if (user.refreshToken !== refreshToken) {
// //       return false;
// //     }
// //     const payload = <{ sub: string }>this.jwt.decode(refreshToken);
// //     return payload.sub === user._id;
// //   }

//   public generateAccessToken(data: Payload): string {
//     const payload: JwtPayload = {
//       sub: data.id,
//       email: data.email,
//       roles: data.roles,
//     };
//     return this.jwt.sign(payload);
//   }

//   public generateRefreshToken(data: RefreshTokenPayload): string {
//     return this.jwt.sign(data);
//   }

// //   public async resendEmail(email: string): Promise<BaseApiResponse<null>> {
// //     const user = await this.userService.getUserByEmail(email);
// //     const emailVerifyCode = generateCode();
// //     await this.userService.update(user._id, {
// //       emailVerifyCode: emailVerifyCode,
// //     });
// //     user.emailVerifyCode = emailVerifyCode;
// //     this.sendEmailVerification(user);
// //     return {
// //       error: false,
// //       data: null,
// //       message: MESSAGES.RESEND_SUCCESS,
// //       code: 200,
// //     };
// //   }

// //   public sendEmailVerification(user: User | UserOutputDto) {
// //     const subject = 'Prime Edu - Xác thực tài khoản';
// //     const context = {
// //       fullname: user.fullname,
// //       verifyCode: user.emailVerifyCode,
// //     };
// //     this.mailService
// //       .sendMail(
// //         user.email,
// //         subject,
// //         context,
// //         MAIL_TEMPLATE.VERIFY_EMAIL_TEMPLATE,
// //       )
// //       .then(() => {
// //         return true;
// //       });
// //   }

// //   public sendForgotPassword(user: User | UserOutputDto) {
// //     const subject = 'Prime Edu - Forgot password';
// //     const context = {
// //       fullname: user.fullname,
// //       verifyCode: user.emailVerifyCode,
// //     };
// //     this.mailService
// //       .sendMail(
// //         user.email,
// //         subject,
// //         context,
// //         MAIL_TEMPLATE.FORGOT_PASSWORD_TEMPLATE,
// //       )
// //       .then(() => {
// //         return true;
// //       });
// //   }
// }
