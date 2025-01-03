import { CatchAsync } from '../../utils/CatchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { UserService } from './user.service';

const userCreateIntoDB = CatchAsync(async (req, res) => {
  const result = await UserService.createUser(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User created successfully',
    data: result,
  });
});

export const UserController = {
  userCreateIntoDB,
};
