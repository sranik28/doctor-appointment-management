import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';

const userSchema = new Schema<TUser>({
    id: {
        type: String,
    },
    role: {
        type: String,
        enum: ['Admin', 'Doctor', 'Patient'],
        required: true,
    },
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
});

export const User = model('User', userSchema);
