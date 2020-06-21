import { put, call, select } from 'redux-saga/effects';
import applyJob from 'app/api/methods/applyJob';
import * as applyJobsActions from 'app/actions/applyJobsActions';
import * as loaderAction from 'app/actions/loaderActions';
import * as navigateActions from '../actions/navigationActions';

// Our worker Saga that logins the user
export default function* applyJobAsync(action) {
  yield put(loaderAction.enableLoader());
  const { userToken } = yield select(state => state.getTokenReducer);

  try {
    const response = yield call(applyJob, action.params, userToken);
    if (response.Status === 'Success') {
      yield put(applyJobsActions.applyJobResponse(true));
      // yield put(navigateActions.myJobsPage())
      yield put(loaderAction.disableLoader({}));

    } else {
      yield put(applyJobsActions.createProfileFailed());
      yield put(loaderAction.disableLoader({}));
    }
  } catch (error) {
    yield put(loaderAction.disableLoader({}));
  }
}
