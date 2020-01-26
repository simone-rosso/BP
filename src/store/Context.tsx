import React, { useReducer } from 'react';
import Context from '../utils/context';
import * as ACTIONS from './actions/actions';

import Routes from '../routes/Routes';
import * as AuthReducer from './reducers/authReducer';
import * as SamplesReducer from './reducers/samplesReducer';
import IUserProfileModel from '../models/IUserProfile';
import { IResolve } from '../models/IResolve';

const ContextState = () => {
  /*
    Auth actions creators
  */
  const [stateAuthReducer, dispatchAuthReducer] = useReducer(AuthReducer.AuthReducer, AuthReducer.initialState)

  const handleLogin = (profile: IUserProfileModel) => {
    dispatchAuthReducer(ACTIONS.login_success(profile))
  }

  const handleLoginFailure = () => {
    dispatchAuthReducer(ACTIONS.login_failure())
  }

  const handleLogout = () => {
    dispatchAuthReducer(ACTIONS.logout())
  }

  /*
    Samples actions creators
  */

  const [stateSamplesReducer, dispatchSamplesReducer] = useReducer(SamplesReducer.SamplesReducer, SamplesReducer.initialState)

  const setSamples = (res: IResolve) => {
    dispatchSamplesReducer(ACTIONS.set_samples(res))
  };

  const setQuerySamples = (query: string) => {
    dispatchSamplesReducer(ACTIONS.set_query_samples(query))
  }

  const setLoadingSamples = (loading: boolean) => {
    dispatchSamplesReducer(ACTIONS.set_loading_samples(loading))
  }

  const setOpenDialogSamples = (open: boolean) => {
    dispatchSamplesReducer(ACTIONS.set_open_dialog_samples(open))
  }

  return (
    <Context.Provider
      value={{

        //Auth Reducer
        authState: stateAuthReducer.is_authenticated,
        profileState: stateAuthReducer.profile,
        handleUserLogin: (profile: IUserProfileModel) => handleLogin(profile),
        handleUserLoginFailure: () => handleLoginFailure(),
        handleUserLogout: () => handleLogout(),

        samplesList: stateSamplesReducer.list,
        sampleMeta: stateSamplesReducer.meta,
        sampleQuery: stateSamplesReducer.query,
        sampleLoading: stateSamplesReducer.loading,
        sampleOpenDialog: stateSamplesReducer.openDialog,
        setSamplesList: (res: IResolve) => setSamples(res),
        setQuerySamples: (query: string) => setQuerySamples(query),
        setLoadingSamples: (loading: boolean) => setLoadingSamples(loading),
        setOpenDialogSamples: (open: boolean) => setOpenDialogSamples(open)
      }
      }>
      <Routes />
    </Context.Provider>
  )
}

export default ContextState;