import * as ACTION_TYPES from '../actions/action_types'
import { removeCookie } from '../../utils/cookie';
import IUserProfileModel from '../../models/IUserProfile';

interface IAuthReducerState {
  is_authenticated: boolean,
  profile?: IUserProfileModel | null
}

interface IAuthReducerActions {
  type: string;
  payload?: IUserProfileModel
}

export const initialState: IAuthReducerState = {
  is_authenticated: false
}

export const AuthReducer = (state: IAuthReducerState = initialState, action: IAuthReducerActions) => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        is_authenticated: true
      }
    case ACTION_TYPES.LOGIN_FAILURE:
      return {
        ...state,
        is_authenticated: false
      }
    case ACTION_TYPES.LOGOUT:
      removeCookie("BPtoken");
      localStorage.removeItem('BP-user-profile');
      return {
        ...state,
        profile: undefined,
        is_authenticated: false
      }
    default:
      return state
  }
}