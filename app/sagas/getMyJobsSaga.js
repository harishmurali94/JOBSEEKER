import { put, call, select } from 'redux-saga/effects';
import getMyJob from 'app/api/methods/getMyJob';
import * as getMyJobsAction from 'app/actions/getMyJobsAction';
import * as loaderAction from 'app/actions/loaderActions';
import * as navigateActions from '../actions/navigationActions';

// Our worker Saga that logins the user
export default function* applyJobAsync(action) {
  yield put(loaderAction.enableLoader());
  const { userToken } = yield select(state => state.getTokenReducer);

  try {
    const response = yield call(getMyJob, action.params, userToken);
    console.log("JOB RESPONSE ++++ ",JSON.stringify(response.Data,null,2));
    if (response.Status === 'Success') {
      console.log(response.Data);

      yield put(getMyJobsAction.getMyJobsResponse(response.Data));
      yield put(loaderAction.disableLoader({}));
    } else {
      yield put(getMyJobsAction.getMyJobsFailed());
      yield put(loaderAction.disableLoader({}));
    }
  } catch (error) {
    yield put(loaderAction.disableLoader({}));
  }
}
