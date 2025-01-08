import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';

const userSchema = new Schema<TUser>({
  // id: {
  //   type: String,
  // },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['Admin', 'Doctor', 'Patient'],
    default: 'Patient',
  },
});

export const User = model('User', userSchema);
