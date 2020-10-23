import { put, call, select, delay } from 'redux-saga/effects';
// import getJobDetails from 'app/api/methods/getJobDetails';
import * as getEarningDetailsActions from '../actions/getEarningDetailsActions';
import getEarningDetails from '../api/methods/getEarningDetails';

// Our worker Saga that logins the user
export default function* getEarningDetail(action) {
  const { userToken } = yield select(state => state.getTokenReducer);

  try {
    const response = yield call(getEarningDetails, action.params, userToken);
    if (response.Status === 'Success') {
      yield put(
        getEarningDetailsActions.getEarningDetailsResponse(response.Data),
      );
    } else {
      yield put(getEarningDetailsActions.getEarningDetailsFailed());
    }
  } catch (error) {
    yield put(getEarningDetailsActions.getEarningDetailsFailed({}));
  }
}
