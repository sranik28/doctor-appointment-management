import { AppError } from '../../errors/AppErrors';
import { User } from '../User/user.model';

const loginUser = async (payload: TLoginUser) => {
  const isUserExist = await User.findOne({ email: payload.email });
  if (!isUserExist) {
    throw new AppError(404, 'User does not exist');
  }
  if (isUserExist.status === 'Blocked') {
    throw new AppError(400, 'User is blocked');
  }
};
