import React, { useState, useEffect, useContext } from 'react';
import validate from 'validate.js';
import { LogoText } from '../../icons'
import Context from '../../utils/context';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { ILoginState, ILoginProps, useStyles, schema } from './LoginConfig';
import { IconButton, TextField, Typography, Fab, FormControl, InputLabel, Input, InputAdornment, FormHelperText } from '@material-ui/core';
import Auth from '../../utils/auth';
import { setCookie } from '../../utils/cookie';

const auth = new Auth();

const Login = (props: ILoginProps) => {

  const classes: any = useStyles();
  const context: any = useContext(Context);
  const [authError, setAuthError] = useState<string | undefined>(undefined);

  const [formState, setFormState] = useState<ILoginState>({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
    showPassword: false,
    rememberPassword: false
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState((formState: ILoginState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  const handleClickShowPassword = () => {
    setFormState({ ...formState, showPassword: !formState.showPassword });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleChange = (event: any) => {
    event.persist();

    setAuthError(undefined);

    setFormState((formState: ILoginState) => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
  };

  const handleLogin = async (event: any) => {
    event.preventDefault();
    await auth.login(formState.values.email, formState.values.password)
      .then((res: any) => {
        setCookie("BPtoken", res.token);
        localStorage.setItem('BP-user-profile', JSON.stringify(res));
        context.handleUserLogin(res);
      })
      .catch((err) => {
        setAuthError(err.response.data.MESSAGE);
      })
  };

  const hasError = (field: string) =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.contentHeader}>
          <LogoText />
        </div>
        <div className={classes.contentBody}>
          <Typography className={classes.title} variant="h3">
            Inicia sesión
            </Typography>
          <form onSubmit={handleLogin}>
            <TextField
              label="Email"
              name="email"
              type="text"
              fullWidth
              className={classes.textField}
              onChange={handleChange}
              autoComplete="username"
              error={hasError('email')}
              value={formState.values.email || ''}
            />
            <FormControl fullWidth className={classes.textField}>
              <InputLabel htmlFor="standard-adornment-password">Contraseña</InputLabel>
              <Input
                name="password"
                type={formState.showPassword ? 'text' : 'password'}
                value={formState.values.password || ''}
                onChange={handleChange}
                autoComplete="current-password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {formState.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <FormHelperText id="standard-weight-helper-text" className={classes.formHelper}>
                <a href="/recover-password">
                  ¿Olvidaste la contraseña?
                  </a>
              </FormHelperText>
            </FormControl>
            <Fab
              color="primary"
              variant="extended"
              className={classes.FormButton}
              type="submit"
              disabled={!formState.isValid}
            >
              Entrar
                </Fab>
            {authError && <Typography color="error" variant="subtitle2">{authError}</Typography>}
            <Typography
              color="textSecondary"
              variant="body1"
            >
              ¿No tienes cuenta?{' '}
              <a href="/register">
                Registrate
              </a>
            </Typography>
          </form>
        </div>
      </div>
    </div >
  );
};

export default Login
