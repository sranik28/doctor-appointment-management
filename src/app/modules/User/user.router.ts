import { Router } from 'express';
import { UserController } from './user.controller';
import { validateRequest } from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';

const router = Router();

router.post(
  '/create-patient',
  validateRequest(UserValidation.createUserValidationSchema),
  UserController.patientCreateIntoDB,
);
router.post(
  '/create-admin',
  validateRequest(UserValidation.createUserValidationSchema),
  UserController.adminCreateIntoDB,
);
router.post(
  '/create-doctor',
  validateRequest(UserValidation.createUserValidationSchema),
  UserController.doctorCreateIntoDB,
);

export const userRouters = router;
