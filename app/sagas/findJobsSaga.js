import { put, call, select } from 'redux-saga/effects';
import findJobs from 'app/api/methods/findJobs';
import * as findJobsActions from 'app/actions/findJobsActions';
import * as loaderAction from 'app/actions/loaderActions';
import * as navigateActions from '../actions/navigationActions';

// Our worker Saga that logins the user
export default function* findJobsAsync(action) {
  yield put(loaderAction.enableLoader());
  const { userToken } = yield select(state => state.getTokenReducer);

  try {
    const response = yield call(findJobs, action.params, userToken);
    if (response.Status === 'Success') {
      console.log('DATA', response.Data);

      yield put(findJobsActions.getJobResponse(response.Data));
      yield put(loaderAction.disableLoader({}));
    } else {
      yield put(findJobsActions.getJobsFailed());
      yield put(loaderAction.disableLoader({}));
    }
  } catch (error) {
    console.log('error in find  jobs', error);
    yield put(loaderAction.disableLoader({}));
  }
}
