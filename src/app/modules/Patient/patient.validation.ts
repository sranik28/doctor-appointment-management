import { z } from 'zod';

const patientValidationSchema = z.object({
  body: z.object({
    id: z.string({
      required_error: 'id is required',
    }),
    name: z.string({
      required_error: 'name is required',
    }),
    age: z.number({
      required_error: 'age is required',
    }),
    email: z.string({
      required_error: 'email is required',
    }),
    gender: z.enum(['male', 'female', 'other'], {
      required_error: 'gender is required',
    }),
    contactNo: z.string({
      required_error: 'contactNo is required',
    }),
    address: z.string({
      required_error: 'address is required',
    }),
    profileImage: z.string({
      required_error: 'profileImage is required',
    }),
    medicalHistory: z.string({
      required_error: 'medicalHistory is required',
    }),
  }),
});

export const patientValidation = {
  patientValidationSchema,
};
