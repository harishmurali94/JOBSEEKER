import * as types from './types';

export function getMyJobsRequest(params) {
  return {
    type: types.GET_MY_JOBS_REQUEST,
    params
  };
};

export function getMyJobsResponse(response) {
  return {
    type: types.GET_MY_JOBS_RESPONSE,
    response
  };
}



export function getMyJobsFailed(status) {
  return {
    type: types.GET_MY_JOBS_FAILED,
    status
  };
}
