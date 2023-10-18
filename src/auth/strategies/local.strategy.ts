import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super();
  }
  //
  // public async validate(username: string, password: string): Promise<Payload> {
  //   const user = await this.auth.validateUser(username, password);
  //   if (!user) {
  //     throw new UnauthorizedException('NotFoundUser');
  //   }
  //
  //   return { userId: user.id, username: user.name, roles: user.roles };
  // }
}
