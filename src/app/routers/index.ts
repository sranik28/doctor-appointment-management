import { Router } from 'express';
import { userRouters } from '../modules/User/user.router';
import { authRouters } from '../modules/Auth/auth.router';


const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: userRouters,
  },
  {
    path: '/auth',
    route: authRouters,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
