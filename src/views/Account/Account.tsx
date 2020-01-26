import React from 'react'
import Paper from '@material-ui/core/Paper';
import { Typography, Grid, Switch, makeStyles, Theme, createStyles } from '@material-ui/core';
import Accordion from '../../components/Accordion';
import Profile from '../Profile'
import { accountConfig, accountPermissions } from '../../config'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    closeAccount: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
      marginTop: 50
    },
    accordionBlock: {
      marginTop: 25
    }
  }),
);

const Account = () => {

  const classes = useStyles();
  return (
    <Grid container spacing={10}>
      <Grid item xs={6} md={7}>
        <Typography variant="h3">Perfil y Cuenta</Typography>
        <div >
          <Paper >
            <Profile />
          </Paper>
        </div>
      </Grid>
      <Grid item xs={6} md={5}>
        <Typography variant="h3">Preferencias</Typography>
        <div className={classes.accordionBlock}>
          <Typography variant="h6">Configuración</Typography>
          <Accordion config={accountConfig} />
        </div>
        <div className={classes.accordionBlock}>
          <Typography variant="h6">Permisos</Typography>
          <Accordion config={accountPermissions} />
        </div>
        <div className={classes.closeAccount}>
          <Paper>
            <Typography>Cerrar Cuenta</Typography>
            <Switch />
          </Paper>
        </div>
      </Grid>
    </Grid>
  )
}

export default Account
