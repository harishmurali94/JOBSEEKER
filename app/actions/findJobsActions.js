import * as types from './types';



export function findJobRequest(params) {
  return {
    type: types.FIND_JOBS_REQUEST,
    params
  };
};

export function getJobResponse(response) {
  return {
    type: types.FIND_JOBS_RESPONSE,
    response,
  };
}



export function getJobsFailed() {
  return {
    type: types.FIND_JOBS_FAILED,
  };
}
