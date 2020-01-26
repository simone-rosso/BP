import { makeStyles } from "@material-ui/core";

export interface IProfileProps {
    history?: any
}

export interface IProfileState {
    isValid: boolean,
    values: {
        name?: string,
        surname?: string
        email: string,
        password: string,
        confirmPassword: string,
        country: string,
        nif: string
    },
    touched: any,
    errors: any,
    showPassword: boolean,
}

export const useStyles = makeStyles(theme => ({
    root: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        width: '90%',
        margin: 'auto',
        padding: '35px 0',
        position: 'relative',
        top: '10%',
    },
    grid: { height: '100%' },
    title: { fontFamily: "'Raleway', sans-serif;" },
    contentHeader: { marginBottom: '15%' },
    contentBody: {},
    textField: {
        textAlign: "left"
    },
    formHelper: {
        textAlign: "end",
    },
    FormButton: {
        width: '164px',
        margin: '30px auto'
    },
    formControl: {
        width: '100%',
    },
    countryDropdown: {
        textAlign: 'left',
        width: '100%',
        marginTop: '16px',
    }
}));

export const schema = {
    email: {
        presence: { allowEmpty: false, message: 'is required' },
        email: true,
        length: {
            maximum: 64
        }
    },
    password: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
            maximum: 128
        }
    },
    confirmPassword: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
            maximum: 128
        }
    },
    country: {
        presence: { allowEmpty: false, message: 'is required' },
    },
    nif: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
            maximum: 9
        }
    }
};