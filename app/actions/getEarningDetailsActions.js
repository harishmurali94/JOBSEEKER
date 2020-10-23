import * as types from './types';

export function getEarningDetailsRequest(params) {
  return {
    type: types.GET_EARNINGDETAILS_REQUEST,
    params,
  };
}

export function getEarningDetailsResponse(response) {
  return {
    type: types.GET_EARNINGDETAILS_RESPONSE,
    response,
  };
}

export function getEarningDetailsFailed() {
  return {
    type: types.GET_EARNINGDETAILS_FAILED,
  };
}
