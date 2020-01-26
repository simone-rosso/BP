import axios from 'axios'

export interface IAccountModel {
    name?: string,
    surname?: string,
    email?: string,
    password?: string,
    confirmPassword?: string,
    country: string,
    nie?: string
}

const url = 'http://dev-services.bluephage.com/api/v1/register/';

export const register = async (params: IAccountModel) => {
    const res = await axios.post(url, params)
        .then(response => { return response })
    return res;
};