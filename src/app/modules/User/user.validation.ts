import { z } from 'zod';

const userValidationSchema = z.object({
  body: z.object({
    id: z.string({
      required_error: 'id is required',
    }),
    role: z.enum(['Admin', 'Doctor', 'Patient'], {
      required_error: 'role is required',
    }),
    name: z.string({
      required_error: 'name is required',
    }),
    email: z.string({
      required_error: 'email is required',
    }),
    password: z.string({
      required_error: 'password is required',
    }),
  }),
});

export const UserValidation = {
  userValidationSchema,
};
