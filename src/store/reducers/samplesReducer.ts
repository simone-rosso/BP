import * as ACTION_TYPES from '../actions/action_types'
import ISampleModel from '../../models/ISample';
import { IResolve } from '../../models/IResolve';

interface ISampleReducerState {
  list: ISampleModel[],
  meta: any,
  query: string,
  loading: boolean,
  openDialog: boolean
}

interface ISampleReducerActions {
  type: string,
  payload: any
}

export const initialState: ISampleReducerState = {
  list: [],
  meta: "empty meta",
  query: "",
  loading: false,
  openDialog: false
}

export const SamplesReducer = (state: ISampleReducerState = initialState, action: ISampleReducerActions) => {
  switch (action.type) {
    case ACTION_TYPES.SET_SAMPLES:
      const res: IResolve = action.payload
      return {
        ...state,
        list: res.data,
        meta: res.meta
      }
    case ACTION_TYPES.SET_QUERY_SAMPLES:
      const query = action.payload
      return {
        ...state,
        query: query
      }
    case ACTION_TYPES.SET_LOADING_SAMPLES:
      const loading = action.payload
      return {
        ...state,
        loading: loading
      }
    case ACTION_TYPES.SET_OPEN_DIALOG_SAMPLES:
      const openDialog = action.payload
      console.log("openDialog ", openDialog)
      return {
        ...state,
        openDialog: openDialog
      }
    default:
      return state
  }
}