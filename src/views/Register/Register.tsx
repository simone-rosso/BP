import React, { useState, useEffect, Fragment } from 'react';
import validate from 'validate.js';
import { IRegisterProps, IRegisterState, schema } from './RegisterConfig';
import { IconButton, TextField, Typography, Fab, Input, InputAdornment, Select, MenuItem, Grid, Switch } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useStyles } from '../Login/LoginConfig';
import { eu_countries } from '../../config/options/countries';
import { LogoText } from '../../icons';
import { register } from '../../utils/requests'

const Register = (props: IRegisterProps) => {

  const classes = useStyles();
  const [signupStatus, setSignupStatus] = useState<string | undefined>(undefined);

  const [formState, setFormState] = useState<IRegisterState>({
    isValid: false,
    values: { country: "Spain" },
    touched: {},
    errors: {},
    showPassword: false,
    showConfirmPassword: false,
    rememberPassword: false,
    master: false,
    demo: false
  });

  useEffect(() => {
    const { values } = formState
    const errors = validate(values, schema);

    if (values.password && values.password !== values.confirmPassword) {
      return setFormState((formState: IRegisterState) => ({
        ...formState,
        isValid: false,
        errors: errors || {}
      }))
    }

    setFormState((formState: IRegisterState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  const handleClickShowPassword = (event: any) => {
    setFormState({ ...formState, showPassword: !formState.showPassword });
  };

  const handleChange = (event: any) => {
    event.persist();

    setSignupStatus(undefined);

    setFormState((formState: IRegisterState) => ({
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

  const countriesOptions = eu_countries.map((country: string, index: number) =>
    <MenuItem value={country} key={index}>{country}</MenuItem>)

  const handleCreate = (event: any) => {
    event.preventDefault();
    register(formState.values)
      .then((res) => { console.log(res); setSignupStatus("created") })
      .catch((err) => { console.error(err.response.data.MESSAGE); setSignupStatus(err.response.data.MESSAGE) })
  }

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
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
            Crea tu cuenta
            </Typography>
          <form onSubmit={handleCreate} className={classes.formControl}>
            <TextField
              className={classes.textField}
              label="Nombre"
              name="name"
              onChange={handleChange}
              type="text"
              fullWidth
              value={formState.values.name || ''}
            />
            <TextField
              className={classes.textField}
              label="Apellidos"
              name="surname"
              onChange={handleChange}
              type="text"
              fullWidth
              value={formState.values.surname || ''}
            />
            <TextField
              className={classes.textField}
              label="Email"
              name="email"
              onChange={handleChange}
              type="text"
              fullWidth
              error={hasError('email')}
              value={formState.values.email || ''}
            />
            <Select
              name="country"
              className={classes.loginDropdown}
              value={formState.values.country}
              onChange={handleChange}
            >
              {countriesOptions}
            </Select>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Input
                  name="password"
                  placeholder="password"
                  type={formState.showPassword ? 'text' : 'password'}
                  value={formState.values.password || ''}
                  onChange={handleChange}
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
              </Grid>
              <Grid item xs={12} md={6}>
                <Input
                  name="confirmPassword"
                  type={formState.showPassword ? 'text' : 'password'}
                  placeholder='confirm password'
                  value={formState.values.confirmPassword || ''}
                  onChange={handleChange}
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
              </Grid>
              <Typography
                color="textSecondary"
                variant="body1"
                className={classes.textField}
              >
                Debe contener ocho caracteres como mínimo combinando letras, números y mayúscula.
                </Typography>
            </Grid>
            <div className={classes.switchLabel}>
              <Typography variant="body1">Crear cuenta como usuario Máster</Typography>
              <Switch
                value="master"
                color="primary"
                checked={formState.master}
                onChange={() => setFormState({ ...formState, master: !formState.master, demo: false })}
              />
            </div>
            {
              formState.master &&
              <Fragment>
                <div className={classes.warningBox}>
                  <Typography
                    variant="body1"
                  >El usuario Máster podrá vincular diferentes usuarios a su cuenta.</Typography>
                </div>
                <TextField
                  className={classes.textField}
                  label="Identificación fiscal"
                  name="nie"
                  onChange={handleChange}
                  type="text"
                  value={formState.values.nie || ''}
                />
              </Fragment>
            }
            <div className={classes.switchLabel}>
              <Typography variant="body1">Iniciar sesión Demo</Typography>
              <Switch
                value="demo"
                color="primary"
                disabled={formState.master}
                checked={formState.demo}
                onChange={() => setFormState({ ...formState, demo: !formState.demo })}
              />
            </div>
            {
              formState.demo && !formState.master &&
              <div className={classes.warningBox}>
                <Typography
                  variant="body1"
                >Si inicias sesión como Demo, podrás disfrutar de todas las funcionalidades de la aplicación, pero al cerrar sesión se borrará el usuario.</Typography>
              </div>}
            <Fab
              color="primary"
              variant="extended"
              className={classes.FormButton}
              type="submit"
              disabled={!formState.isValid}
            >Crear</Fab>
            {signupStatus &&
              <Typography
                color={signupStatus === "created" ? "primary" : "error"}
                variant="subtitle2">
                {signupStatus === "created" ? "La cuenta ha sido creada con exito" : signupStatus}
              </Typography>}
            <Typography
              color="textSecondary"
              variant="body1"
            >
              ¿Ya eres miembro?{' '}
              <a href="/">Inicia sesión</a>
            </Typography>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register