import * as types from './types';



export function hiredJobDetailRequest(params) {
  return {
    type: types.HIRED_JOB_REQUEST,
    params
  };
};

export function hiredJobDetailResponse(response) {
  return {
    type: types.HIRED_JOB_RESPONSE,
    response
  };
}



export function hiredJobDetailFailed() {
  return {
    type: types.HIRED_JOB_FAILED
  };
}
