import createReducer from 'app/lib/createReducer';
import * as types from '../actions/types';

const initialState = {
  earnings: [],
};

export const getEarningsReducer = createReducer(initialState, {
  [types.GET_EARNINGS_RESPONSE](state, action) {
    return { ...state, earnings: action.response };
  },
});
