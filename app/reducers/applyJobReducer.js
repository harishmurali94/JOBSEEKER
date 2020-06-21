import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
 jobApplied:false
};

export const applyJobReducer = createReducer(initialState, {
  [types.APPLY_JOB_RESPONSE](state, action) {
    return { ...state, jobApplied: action.status };
  },
  [types.APPLY_JOB_FAILED](state, action) {
    return { ...state, jobApplied: false };
  },
});