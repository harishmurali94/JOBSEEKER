/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
  numberVerified: false,
  deviceRegId: '',
  mobileNumber: '',
  countryCode: '',
  otpVerified: false,
  tempUserId: '',
};

export const loginReducer = createReducer(initialState, {
  [types.LOGIN_RESPONSE](state, action) {
    console.log('action inside login reducer', action);
    return {
      ...state,
      numberVerified: true,
      otpVerified: false,
      deviceRegId: action.response.deviceRegId,
      mobileNumber: action.response.mobileNumber,
      countryCode: action.response.countryCode,
    };
  },
  [types.LOGIN_FAILED](state) {
    return {
      ...state,
      numberVerified: false,
      otpVerified: false,
      tempUserId: "",
    };
  },
  [types.OTP_VERIFIED](state, action) {
    return {
      ...state,
      otpVerified: true,
      tempUserId: action.userID,
    };
  },
  [types.LOG_OUT](state) {
    return {
      ...state,
      numberVerified: false,
    };
  },
});
