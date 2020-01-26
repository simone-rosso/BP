import React, { useEffect, useContext } from 'react';
import history from './history';
import Context from './context';

const AuthCheck = () => {
  const context = useContext(Context)

  useEffect(() => {
    if (context.authObj.isAuthenticated()) {
      context.handleUserLogin()
      context.handleUserAddProfile(context.authObj.userProfile)
      history.replace('/')
    }
    else {
      context.handleUserLogout()
      context.handleUserRemoveProfile()
      history.replace('/')
    }
  }, [])

  return (
    <div id="authCheck">
    </div>
  )
}


export default AuthCheck;