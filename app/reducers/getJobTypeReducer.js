import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
  jobTypes: [],
  limit: 0,
};

export const getJobTypeReducer = createReducer(initialState, {
  [types.GET_JOB_TYPES](state, action) {
    return { ...state, jobTypes: action.response, limit: action.limit };
  },
});
