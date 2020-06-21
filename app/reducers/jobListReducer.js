import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
  jobList : [],
};

export const jobListReducer = createReducer(initialState, {
  [types.FIND_JOBS_RESPONSE](state,action) {
    return { ...state, jobList: action.response };
  }
});