import React, { Suspense } from 'react';
import history from '../utils/history'
import { Route, Switch, Redirect, Router } from "react-router-dom";
import { CircularProgress } from '@material-ui/core';
import { PageNotFound } from '../views';

//lazy dynamic import of components 
const Homepage = React.lazy(() => import('../views/Homepage'));
const Samples = React.lazy(() => import('../views/Samples'));
const Users = React.lazy(() => import('../views/Users'));
const CodesQR = React.lazy(() => import('../views/CodesQR'));
const Analytics = React.lazy(() => import('../views/Analytics'));
const Tools = React.lazy(() => import('../views/Tools'));
const Account = React.lazy(() => import('../views/Account'));
const Logout = React.lazy(() => import('../views/Logout'));

const PrivateRoutes = () => (
  <Router history={history}>
    <Suspense fallback={<div><CircularProgress />Loading...</div>}>
      <Switch>
        <Route path="/home" component={Homepage} />
        <Route path='/samples' component={Samples} />
        <Route path='/groups' component={Users} />
        <Route path='/codes' component={CodesQR} />
        <Route path='/analytics' component={Analytics} />
        <Route path='/tools' component={Tools} />
        <Route path='/account' component={Account} />
        <Route path='/logout' component={Logout} />
        <Route exact path="/" render={() => (<Redirect to="/home" />)} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Suspense >
  </Router>
);

export default PrivateRoutes;