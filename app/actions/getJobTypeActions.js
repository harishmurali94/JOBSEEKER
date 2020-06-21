import * as types from './types';

export function saveJobTypes(response,limit) {
  return {
    type: types.GET_JOB_TYPES,
    response,
    limit
  };
}

export function jobTypeFailed() {
  return {
    type: types.FAILURE_JOB_TYPES,
  };
}
