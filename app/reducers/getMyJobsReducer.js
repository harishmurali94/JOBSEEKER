import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
 myJobs:[],
 myJobsStatus:false
};

export const getMyJobsReducer = createReducer(initialState, {
  [types.GET_MY_JOBS_RESPONSE](state, action) {
    return { ...state, myJobs: action.response,myJobsStatus: true };
  },
  [types.GET_MY_JOBS_FAILED](state, action) {
    return { ...state, myJobs:[],myJobsStatus: false };
  },
});