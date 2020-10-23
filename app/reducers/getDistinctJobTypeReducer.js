import createReducer from 'app/lib/createReducer';
import * as types from '../actions/types';

const initialState = {
  jobType: [],
};

export const getDistinctJobTypeReducer = createReducer(initialState, {
  [types.GET_DISTINCTJOBTYPES_RESPONSE](state, action) {
    return { ...state, jobType: action.response };
  },
});
