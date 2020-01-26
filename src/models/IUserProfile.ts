export default interface IUserProfileModel {
    _id?: string;
    updatedAt?: Date;
    name: string;
    email: string;
    createdAt?: Date;
    roles: string[];
    state: string;
    deleted: boolean;
    gpo: number | null;
    expiresIn: number;
    token?: string
}