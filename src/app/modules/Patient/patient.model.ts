import mongoose, { model, Schema } from 'mongoose';
import { TPatient } from './patient.interface';

const patientSchema = new Schema<TPatient>({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
  },
  contactNo: {
    type: String,
  },
  address: {
    type: String,
  },
  profileImage: {
    type: String,
  },
});

export const Patient = model<TPatient>('Patient', patientSchema);
