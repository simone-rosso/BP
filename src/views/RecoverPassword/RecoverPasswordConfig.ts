export interface IRecoverPasswordState {
    isValid: boolean,
    values: any,
    touched: any,
    errors: any
}

export interface IRecoverPasswordProps {
    history: any
}

export const schema = {
    email: {
        presence: { allowEmpty: false, message: 'is required' },
        email: true,
        length: {
            maximum: 64
        }
    }
};