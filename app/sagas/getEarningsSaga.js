import { put, call, select, delay } from 'redux-saga/effects';
// import getJobDetails from 'app/api/methods/getJobDetails';
import * as getEarningsActions from '../actions/getEarningsActions';
import getEarnings from '../api/methods/getEarnings';

// Our worker Saga that logins the user
export default function* getEarning(action) {
  const { userToken } = yield select(state => state.getTokenReducer);

  try {
    const response = yield call(getEarnings, action.params, userToken);
    if (response.Status === 'Success') {
      yield put(getEarningsActions.getEarningsResponse(response.Data));
    } else {
      yield put(getEarningsActions.getEarningsFailed());
    }
  } catch (error) {
    yield put(getEarningsActions.getEarningsFailed({}));
  }
}
