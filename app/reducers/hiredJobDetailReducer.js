// hiredJobDetailReducer

import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
  hiredJobStatus: false,
  hiredJobDetail: [],
};

export const hiredJobDetailReducer = createReducer(initialState, {
  [types.HIRED_JOB_RESPONSE](state, action) {
    return { ...state, hiredJobStatus:true, hiredJobDetail: action.response };
  },
  [types.HIRED_JOB_FAILED](state, action) {
    return { ...state, hiredJobStatus: false, hiredJobDetail: [] };
  },
});
