import createReducer from 'app/lib/createReducer';
import * as types from '../actions/types';

const initialState = {
  earningDetails: [],
};

export const getEarningDetailsReducer = createReducer(initialState, {
  [types.GET_EARNINGDETAILS_RESPONSE](state, action) {
    return { ...state, earningDetails: action.response };
  },
});
