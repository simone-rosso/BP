import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Grid from '@material-ui/core/Grid/Grid';
import RecoverPassword from '../views/RecoverPassword';
import { Login, Register, PageNotFound } from '../views';

const customStyle = {
    backgroundImage: 'url(/images/login_page.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPositionX: 'right',
    backgroundPositionY: 'center'
}

const PublicRoutes = () => (
    <Fragment>
        <Grid container style={{ height: "100%" }}>
            <Grid item lg={6} xs={12}>
                <Switch>
                    <Route path="/register" component={Register} />
                    <Route path="/recover-password" component={RecoverPassword} />
                    <Route exact path="/" component={Login} />
                    <Route path="*" component={PageNotFound} />
                </Switch>
            </Grid>
            <Grid className="half-screen-login"
                item lg={6} xs={12}
                style={customStyle}>
            </Grid>
        </Grid>
    </Fragment >
);

export default PublicRoutes;