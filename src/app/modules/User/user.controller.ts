import { CatchAsync } from '../../utils/CatchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { UserService } from './user.service';

const patientCreateIntoDB = CatchAsync(async (req, res) => {
  const result = await UserService.createPatient(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Patient created successfully',
    data: result,
  });
});

const adminCreateIntoDB = CatchAsync(async (req, res) => {
  const result = await UserService.createAdmin(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Admin created successfully',
    data: result,
  });
});

const doctorCreateIntoDB = CatchAsync(async (req, res) => {
  const result = await UserService.createDoctor(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Doctor created successfully',
    data: result,
  });
});

export const UserController = {
  patientCreateIntoDB,
  adminCreateIntoDB,
  doctorCreateIntoDB
};
