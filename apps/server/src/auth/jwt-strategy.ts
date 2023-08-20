import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
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
    console.log('kkijihasjasj');

    return { userId: payload.sub, username: payload.username };
  }
}
