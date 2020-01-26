import makeStyles from "@material-ui/core/styles/makeStyles";

export interface ILoginState {
  isValid: boolean,
  values: {
    email?: string,
    password?: string,
  },
  touched: any,
  errors: any,
  showPassword: boolean,
  rememberPassword: boolean,
}

export interface ILoginProps {
  history: any
}

export const useStyles = makeStyles(theme => ({
  root: { height: '100%' },
  grid: { height: '100%' },
  contentContainer: {},
  content: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    width: '60%',
    margin: '40px auto',
    position: 'relative',
    top: '10%',
  },
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
  loginDropdown: {
    textAlign: 'left',
    width: '100%',
  },
  switchLabel: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '32px',
  },
  warningBox: {
    background: 'rgba(195,194,224,0.2)',
    borderRadius: '8px',
    padding: '10px 14px',
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
  }
};