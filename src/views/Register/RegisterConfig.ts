export interface IRegisterProps {
  history: any
}

export interface IRegisterState {
  isValid: boolean,
  values: {
    name?: string,
    surname?: string,
    email?: string,
    password?: string,
    confirmPassword?: string,
    country: string,
    nie?: string
  },
  touched: any,
  errors: any,
  showPassword: boolean,
  showConfirmPassword: boolean,
  rememberPassword: boolean,
  master: boolean,
  demo: boolean
}


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
  }
};