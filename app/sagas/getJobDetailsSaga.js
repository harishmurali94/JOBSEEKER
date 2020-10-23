import { put, call, select, delay } from 'redux-saga/effects';
// import getJobDetails from 'app/api/methods/getJobDetails';
import * as getJobDetailsActions from 'app/actions/getJobDetails';
import * as loaderAction from 'app/actions/loaderActions';
import getJobDetailsCall from 'app/api/methods/getJobDetails';
import * as navigateActions from '../actions/navigationActions';

// Our worker Saga that logins the user
export default function* getJobDetails(action) {
  yield put(loaderAction.enableLoader());
  const { userToken } = yield select(state => state.getTokenReducer);

  try {
    const response = yield call(getJobDetailsCall, action.params, userToken);
    if (response.Status === 'Success') {
      yield put(getJobDetailsActions.getJobDetailResponse(response.Data));
      yield delay(1000);
      yield put(loaderAction.disableLoader({}));
    } else {
      yield put(getJobDetailsActions.getJobDetailFailed());
      yield put(loaderAction.disableLoader({}));
    }
  } catch (error) {
    yield put(loaderAction.disableLoader({}));
  }
}
