import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import type { JwtPayload } from '../auth.interface';
import { STRATEGY_JWT_REFRESH } from '../constants/strategy.constant';
import { UserAccessTokenClaims } from '../dtos/auth-output.dto';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(
  Strategy,
  STRATEGY_JWT_REFRESH,
) {
  constructor(config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: config.get<string>('jwt.publicKey'),
      algorithms: ['RS256'],
    });
  }

  public validate(payload: JwtPayload): UserAccessTokenClaims {
    return {
      id: payload.sub,
      email: payload.email,
      roles: payload.roles,
    };
  }
}
