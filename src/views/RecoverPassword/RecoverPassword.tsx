import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography/Typography';
import TextField from '@material-ui/core/TextField/TextField';
import Fab from '@material-ui/core/Fab/Fab';
import { IRecoverPasswordState, schema, IRecoverPasswordProps } from './RecoverPasswordConfig';
import validate from 'validate.js';
import { useStyles } from '../Login/LoginConfig';
import { Logo } from '../../icons'

const RecoverPassword = (props: IRecoverPasswordProps) => {

  const classes = useStyles();

  const [formState, setFormState] = useState<IRecoverPasswordState>({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState((formState: IRecoverPasswordState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  const handleChange = (event: any) => {
    event.persist();

    setFormState(formState => ({
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

  const hasError = (field: string) =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.contentHeader}>
          <Logo />
        </div>
        <div className={classes.contentBody}>
          <Typography variant="h3">
            Recuperar contraseña
          </Typography>
          <Typography variant="body2">
            Intruduce tu email y te enviaremos las instrucciones para cambiar la contraseña.
          </Typography>
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
          <Fab
            color="primary"
            variant="extended"
            className={classes.FormButton}
            type="submit"
            disabled={!formState.isValid}
          >
            Enviar
          </Fab>
          <Typography
            color="textSecondary"
            variant="body1"
          >
            Volver al {' '}
            <a href="/">
              Inicio de sessión
            </a>
          </Typography>
        </div>
      </div>
    </div >
  )
}

export default RecoverPassword