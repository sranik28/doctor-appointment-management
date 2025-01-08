import { TUser } from "./user.interface";
import { User } from "./user.model";

const createPatient = async (payload: TUser) => {
    const result = await User.create(payload);
    return result;
};

const createAdmin = async (payload: TUser) => {
    const result = await User.create(payload);
    return result;
};

const createDoctor = async (payload: TUser) => {
    const result = await User.create(payload);
    return result;
};

export const UserService = {
    createPatient,
    createAdmin,
    createDoctor
}