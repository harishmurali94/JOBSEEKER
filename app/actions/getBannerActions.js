import * as types from './types';

export function requestBanner() {
  return {
    type: types.GET_BANNER_REQUEST,
  };
}

export function requestBannerResponse(response) {
  return {
    type: types.GET_BANNER_RESPONSE,
    response,
  };
}

export function requestBannerFailed() {
  return {
    type: types.GET_BANNER_FAILED,
  };
}
