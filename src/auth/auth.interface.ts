import { Role } from '../modules/user/entity';
import { RoleOutput } from './dtos';

export interface JwtSign {
  access_token: string;
  refresh_token: string;
}

export interface JwtPayload {
  sub: number;
  email: string;
  roles: RoleOutput;
}

type MakeNullable<T, K extends keyof T> = Omit<T, K>;

export interface Payload {
  id: number;
  email: string;
  roles: Role | RoleOutput;
}

export interface RefreshTokenPayload {
  sub: number;
}

export interface IBodySocketRequest {
  token?: string;
  username: string;
}
export interface IAuthData {
  authData: IBodySocketRequest;
}

export type SaveUserPayload = MakeNullable<JwtPayload, 'roles'> & {
  fcmToken: string;
  deviceId: string;
};
