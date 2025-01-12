import { Router } from 'express';
import { UserController } from './user.controller';
import { validateRequest } from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';
import { auth } from '../../middlewares/auth';

const router = Router();

router.post(
  '/create-patient',
  auth(),
  validateRequest(UserValidation.createUserValidationSchema),
  UserController.patientCreateIntoDB,
);
router.post(
  '/create-admin',
  // auth(),
  validateRequest(UserValidation.createUserValidationSchema),
  UserController.adminCreateIntoDB,
);
router.post(
  '/create-doctor',
  auth(),
  validateRequest(UserValidation.createUserValidationSchema),
  UserController.doctorCreateIntoDB,
);

export const userRouters = router;
