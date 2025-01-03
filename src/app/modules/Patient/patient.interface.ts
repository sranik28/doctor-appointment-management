export type TPatient = {
    id: string;
    name: string;
    age: number;
    email: string;
    gender: "male" | "female" | "other";
    contactNo: string;
    address: string;
    profileImage: string;
    medicalHistory: string;
};