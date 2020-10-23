import createReducer from 'app/lib/createReducer';
import * as types from '../actions/types';

const initialState = {
  data: [],
};

export const getInformationReducer = createReducer(initialState, {
  [types.GET_INFO_RESPONSE](state, action) {
    return { ...state, data: action.response };
  },
});
