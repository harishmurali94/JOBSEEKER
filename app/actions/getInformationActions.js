import * as types from './types';

export function getInformationRequest(params) {
  return {
    type: types.GET_INFO_REQUEST,
    params,
  };
}

export function getInformationResponse(response) {
  return {
    type: types.GET_INFO_RESPONSE,
    response,
  };
}

export function getInformationFailed() {
  return {
    type: types.GET_INFO_FAILED,
  };
}
