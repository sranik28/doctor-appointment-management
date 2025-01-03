import mongoose, { model, Schema } from 'mongoose';
import { TPatient } from './patient.interface';

const patientSchema = new Schema<TPatient>({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
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
  medicalHistory: {
    type: String,
  },
});

export const Patient = model<TPatient>('Patient', patientSchema);
