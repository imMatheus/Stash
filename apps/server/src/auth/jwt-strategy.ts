import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { ConfigService } from '@nestjs/config';
import { config } from 'src/config';

type JwtStrategyConstructorOptions = ConstructorParameters<typeof Strategy>[0];

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config().JWT_SECRET,
    } satisfies JwtStrategyConstructorOptions);
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
