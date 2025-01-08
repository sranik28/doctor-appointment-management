import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';
import { number } from 'zod';

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
  status: {
    type: String,
    enum: ['Blocked', 'Active'],
    default: 'Active',
  },
});

userSchema.pre('save', async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

export const User = model('User', userSchema);
