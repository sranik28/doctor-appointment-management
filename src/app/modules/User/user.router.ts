import { Router } from 'express';
import { UserController } from './user.controller';

const router = Router();

router.post('/', UserController.userCreateIntoDB);

export const userRouters = router;
