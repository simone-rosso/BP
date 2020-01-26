import React, { useState, useContext, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router';
import history from '../utils/history';
import Context from '../utils/context';
import PublicRoutes from './PublicRoutes';
import DashboardLayout from '../views/Dashboard';
import { getCookie } from '../utils/cookie';

const Routes = () => {

  const token = getCookie("BPtoken");
  const [auth, setAuth] = useState(false);
  if (token && !auth) setAuth(true)
  token && !auth && setAuth(true)

  const context = useContext(Context);

  useEffect(() => {
    if (context.authState) {
      return setAuth(true);
    }
    return setAuth(false);
  }, [context.authState])

  return (
    <Router history={history} >
      <Switch>
        <Route path="/" component={!auth ? PublicRoutes : DashboardLayout} />
        <Route exact path="/" render={() => (<Redirect to="/home" />)} />
      </Switch>
    </Router>
  )
}

export default Routes;