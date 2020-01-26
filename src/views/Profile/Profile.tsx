import React, { useState, useEffect } from 'react';
import validate from 'validate.js';
import { IProfileProps, IProfileState, schema, useStyles } from './ProfileConfig';
import { IconButton, TextField, Typography, Fab, Input, InputAdornment, Select, MenuItem, Grid } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { eu_countries } from '../../config/options/countries';

const Profile = (props: IProfileProps) => {

  const classes = useStyles();

  const [formState, setFormState] = useState<IProfileState>({
    isValid: false,
    values: {
      email: 'srosso@mariabarcelona.com',
      country: "Spain",
      nif: '48394865P',
      password: '123456',
      confirmPassword: '123456'
    },
    touched: {},
    errors: {},
    showPassword: false
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState((formState: IProfileState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  const handleClickShowPassword = () => {
    setFormState({ ...formState, showPassword: !formState.showPassword });
  };

  const handleChange = (event: any) => {
    event.persist();

    setFormState((formState: IProfileState) => ({
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

  const handleSave = () => {
  }

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const hasError = (field: string) =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <div className={classes.root}>
      <form onSubmit={handleSave} className={classes.formControl}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Nombre"
              name="name"
              onChange={handleChange}
              type="text"
              fullWidth
              value={formState.values.name || ''}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Apellidos"
              name="surname"
              onChange={handleChange}
              type="text"
              fullWidth
              value={formState.values.surname || ''}
            />
          </Grid>
          <Grid item xs={12} md={6}>
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
          </Grid>
          <Grid item xs={12} md={6}>
            <Select
              name="country"
              className={classes.countryDropdown}
              value={formState.values.country}
              onChange={handleChange}
            >
              {countriesOptions}
            </Select>
          </Grid>
          <Grid item xs={12} md={6}>
            <Input
              name="password"
              placeholder="password"
              type={formState.showPassword ? 'text' : 'password'}
              value={formState.values.password || ''}
              onChange={handleChange}
              fullWidth
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
              type='password'
              fullWidth
              placeholder='confirm password'
              value={formState.values.confirmPassword || ''}
              onChange={handleChange}
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
        <Grid item xs={12} md={6}>
          <TextField
            label="NIF / NIE"
            name="nif"
            onChange={handleChange}
            type="text"
            fullWidth
            value={formState.values.nif || ''}
          />
        </Grid>
        <Fab
          color="primary"
          variant="extended"
          className={classes.FormButton}
          type="submit"
          disabled={!formState.isValid}
        >Guardar</Fab>
      </form>
    </div>
  )
}

export default Profile