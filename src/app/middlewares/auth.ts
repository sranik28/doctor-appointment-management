import config from '../config';
import { AppError } from '../errors/AppErrors';
import { User } from '../modules/User/user.model';
import { CatchAsync } from '../utils/CatchAsync';
import jwt, { JwtPayload } from 'jsonwebtoken';

export const auth = () => {
  return CatchAsync(async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
      throw new AppError(401, 'You are not authorized');
    }
    // check token
    const decoded = jwt.verify(
      token,
      config.jwt_access_secret as string,
    ) as JwtPayload;
    const { email, role } = decoded;
    console.log("decoded",decoded);

    // const isUserExist = await User.findOne({ email, role });
    // if (!isUserExist) {
    //   throw new AppError(404, 'User does not exist');
    // }

    // if (isUserExist.status === 'Blocked') {
    //   throw new AppError(400, 'User is blocked');
    // }
    // req.user = decoded as JwtPayload;
    next();
  });
};
