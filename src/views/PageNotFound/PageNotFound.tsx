import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
  },
  content: {
    paddingTop: 150,
    textAlign: 'center'
  }
}));

const PageNotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={4}>
        <Grid item lg={6} xs={12}>
          <div className={classes.content}>
            <Typography variant="h2">
              Error 404: page not found
            </Typography>
            <Typography variant="subtitle2">
              You either tried some shady route or you came here by mistake.
              Whichever it is, try using the navigation
            </Typography>
            <Typography
              color="textSecondary"
              variant="body1"
            >
              <a href="/">
                Vuelve a la web
                </a>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default PageNotFound
