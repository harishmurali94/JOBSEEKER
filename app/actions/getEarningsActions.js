import * as types from './types';

export function getEarningsRequest(params) {
  return {
    type: types.GET_EARNINGS_REQUEST,
    params,
  };
}

export function getEarningsResponse(response) {
  return {
    type: types.GET_EARNINGS_RESPONSE,
    response,
  };
}

export function getEarningsFailed() {
  return {
    type: types.GET_EARNINGS_FAILED,
  };
}
