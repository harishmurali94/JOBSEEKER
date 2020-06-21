import * as types from './types';

export function createProfileRequest(params, getCallBack) {
  return {
    type: types.CREATE_PROFILE_REQUEST,
    params,
    getCallBack,
  };
}

export function createProfileResponse(userID, status) {
  return {
    type: types.CREATE_PROFILE_RESPONSE,
    userID,
    status,
  };
}

export function createProfileFailed(status) {
  return {
    type: types.CREATE_PROFILE_FAILED,
    status,
  };
}

export function profileVerified() {
  return {
    type: types.PROFILE_VERIFIED,
  };
}
