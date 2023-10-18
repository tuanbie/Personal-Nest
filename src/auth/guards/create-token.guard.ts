// // create-token.guard.ts

// import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
// import { JwtService } from '@nestjs/jwt';

// @Injectable()
// export class CreateTokenGuard extends AuthGuard('jwt') {
//   constructor(private readonly jwtService: JwtService) {
//     super();
//   }

//   canActivate(context: ExecutionContext) {
//     const request = context.switchToHttp().getRequest();

//     // Thông tin người dùng mà bạn muốn chứa trong token
//     const user = {
//       username: 'exampleUser',
//       role: 'user',
//     };

//     // Tạo token từ thông tin người dùng
//     const token = this.jwtService.sign(user);

//     return token;
//   }
// }
