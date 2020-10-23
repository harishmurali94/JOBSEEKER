import * as types from './types';

export function applyJobRequest(params) {
  return {
    type: types.APPLY_JOB_REQUEST,
    params,
  };
}

export function applyJobResponse(status) {
  return {
    type: types.APPLY_JOB_RESPONSE,
    status,
  };
}

export function applyJobsFailed(status) {
  return {
    type: types.APPLY_JOB_FAILED,
    status,
  };
}
