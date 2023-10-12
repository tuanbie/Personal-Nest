// import {
//     Body,
//     ClassSerializerInterceptor,
//     Controller,
//     Post,
//     UseGuards,
//     UseInterceptors,
//   } from '@nestjs/common';
//   import { Public } from '../../common';
//   import { UserOutputDto } from '../../modules/user/dtos/user-output.dto';
//   import { UserService } from '../../modules/user/providers';
//   import { BaseApiResponse } from '../../shared/dtos';
// //   import { RequestContext } from '../../shared/request-context/request-context.dto';
//   import { AuthService } from '../auth.service';
//   import {
//     ForgotPassword,
//     RefreshTokenInput,
//     RegisterInput,
//     ResendEmailInput,
//     ResetPasswordInput,
//     VerifyEmailInput,
//   } from '../dtos';
//   import { LoginInput } from '../dtos/auth-login-input.dto';
// //   import { JwtRefreshGuard } from '../guards';
  
//   /**
//    * route /auth/*
//    */
//   @Controller('')
//   export class AuthController {
//     constructor(
//       private authService: AuthService,
//       private userService: UserService,
//     ) {}
  
//     @Post('register')
//     @Public()
//     @UseInterceptors(ClassSerializerInterceptor)
//     public async register(
//       @Body() body: RegisterInput,
//     ): Promise<BaseApiResponse<UserOutputDto>> {
//       return this.authService.register(body);
//     }
  
//     // @Post('login')
//     // @Public()
//     // @UseInterceptors(ClassSerializerInterceptor)
//     // public async login(
//     //   @Body() body: LoginInput,
//     // ): Promise<BaseApiResponse<UserOutputDto>> {
//     //   return this.authService.login(body);
//     // }
  
//     // @Post('verify-email')
//     // @Public()
//     // @UseInterceptors(ClassSerializerInterceptor)
//     // public async verifyEmail(
//     //   @Body() body: VerifyEmailInput,
//     // ): Promise<BaseApiResponse<UserOutputDto>> {
//     //   return this.userService.verifyEmail(body);
//     // }
  
//     // @Post('resend-email')
//     // @Public()
//     // @UseInterceptors(ClassSerializerInterceptor)
//     // public async resendEmail(
//     //   @Body() body: ResendEmailInput,
//     // ): Promise<BaseApiResponse<null>> {
//     //   return this.authService.resendEmail(body.email);
//     // }
  
//     // @Post('refresh-token')
//     // @UseGuards(JwtRefreshGuard)
//     // @UseInterceptors(ClassSerializerInterceptor)
//     // public async refreshToken(
//     //   @ReqUser() ctx: RequestContext,
//     //   @Body() body: RefreshTokenInput,
//     // ): Promise<BaseApiResponse<UserOutputDto>> {
//     //   return this.authService.refreshToken(ctx.user.id, body.refreshToken);
//     // }
  
//     // @Post('forgot-password')
//     // @Public()
//     // @UseInterceptors(ClassSerializerInterceptor)
//     // public async forgotPassword(
//     //   @Body() body: ForgotPassword,
//     // ): Promise<BaseApiResponse<UserOutputDto>> {
//     //   return this.authService.forgotPassword(body);
//     // }
  
//     // @Post('reset-password')
//     // @Public()
//     // @UseInterceptors(ClassSerializerInterceptor)
//     // public async resetPassword(
//     //   @Body() body: ResetPasswordInput,
//     // ): Promise<BaseApiResponse<null>> {
//     //   return this.userService.resetPassword(body);
//     // }
//   }
  