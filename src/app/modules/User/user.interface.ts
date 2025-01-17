export type TUser = {
  // id: string;
  name: string;
  email: string;
  password: string;
  role: 'Admin' | 'Doctor' | 'Patient';
  status: 'Blocked' | 'Active';
};
