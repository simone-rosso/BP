import * as ACTION_TYPES from './action_types'
import IUserProfileModel from '../../models/IUserProfile'
import { IResolve } from '../../models/IResolve'

export const login_success = (profile: IUserProfileModel) => {
  return {
    type: ACTION_TYPES.LOGIN_SUCCESS,
    payload: profile
  }
}

export const login_failure = () => {
  return {
    type: ACTION_TYPES.LOGIN_FAILURE
  }
}

export const logout = () => {
  return {
    type: ACTION_TYPES.LOGOUT
  }
}

export const set_samples = (res: IResolve) => {
  return {
    type: ACTION_TYPES.SET_SAMPLES,
    payload: res,
  }
}

export const set_query_samples = (query: string) => {
  return {
    type: ACTION_TYPES.SET_QUERY_SAMPLES,
    payload: query
  }
}

export const set_loading_samples = (load: boolean) => {
  return {
    type: ACTION_TYPES.SET_LOADING_SAMPLES,
    payload: load
  }
}

export const set_open_dialog_samples = (open: boolean) => {
  return {
    type: ACTION_TYPES.SET_OPEN_DIALOG_SAMPLES,
    payload: open
  }
}