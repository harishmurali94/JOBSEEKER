/**
 *  Redux saga class init
 */
import { takeEvery, all, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/types';
import loginSaga from './loginSaga';
import otpSaga from './otpSaga';
import getLocations from './getLocations';
import createProfile from './createProfile';
import findJobs from './findJobsSaga';
import getJobDetail from './getJobDetailsSaga';
import applyJobSaga from './applyJobSaga';
import getMyJobsSaga from './getMyJobsSaga';
import hiredJobDetailSaga from './hiredJobDetailSaga';

export default function* watch() {
  yield all([takeLatest(types.LOGIN_REQUEST, loginSaga)]);
  yield all([takeLatest(types.OTP_REQUEST, otpSaga)]);
  yield all([takeLatest(types.REQUEST_LOCATION, getLocations)]);
  yield all([takeLatest(types.CREATE_PROFILE_REQUEST, createProfile)]);
  yield all([takeLatest(types.FIND_JOBS_REQUEST, findJobs)]);
  yield all([takeLatest(types.JOB_DETAILS_REQUEST, getJobDetail)]);
  yield all([takeLatest(types.APPLY_JOB_REQUEST, applyJobSaga)]);
  yield all([takeLatest(types.GET_MY_JOBS_REQUEST, getMyJobsSaga)]);
  yield all([takeLatest(types.HIRED_JOB_REQUEST, hiredJobDetailSaga)]);
}
