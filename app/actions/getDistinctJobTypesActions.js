import * as types from './types';

export function requestDistinctJob() {
  return {
    type: types.GET_DISTINCTJOBTYPES_REQUEST,
  };
}

export function distinctJobResponse(response) {
  return {
    type: types.GET_DISTINCTJOBTYPES_RESPONSE,
    response,
  };
}

export function distinctJobFailed() {
  return {
    type: types.GET_DISTINCTJOBTYPES_FAILED,
  };
}
