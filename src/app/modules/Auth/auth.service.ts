import { AppError } from '../../errors/AppErrors';
import { User } from '../User/user.model';
import bcrypt from 'bcrypt';
import { createToken } from './auth.utils';
import config from '../../config';

const loginUser = async (payload: TLoginUser) => {
  const isUserExist = await User.findOne({ email: payload.email });
  if (!isUserExist) {
    throw new AppError(404, 'User does not exist');
  }
  if (isUserExist.status === 'Blocked') {
    throw new AppError(400, 'User is blocked');
  }

  const isPasswordMatched = await bcrypt.compare(
    payload.password,
    isUserExist.password,
  );
  if (!isPasswordMatched) {
    throw new AppError(400, 'Password is incorrect');
  }

  const jwtPayload = {
    email: isUserExist.email,
    role: isUserExist.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  return accessToken;
};

export const AuthServices = {
  loginUser,
};
