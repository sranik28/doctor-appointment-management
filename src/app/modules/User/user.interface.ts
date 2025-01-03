export type TUser = {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Doctor' | 'Patient';
  password: string;
};
