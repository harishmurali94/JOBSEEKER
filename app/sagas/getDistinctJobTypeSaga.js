import { put, call, select, delay } from 'redux-saga/effects';
// import getJobDetails from 'app/api/methods/getJobDetails';
import * as getDistinctJobTypesActions from '../actions/getDistinctJobTypesActions';
import getDistinctJobType from '../api/methods/getDistinctJobType';

// Our worker Saga that logins the user
export default function* getDistinctJobTypes(action) {
  const { userToken } = yield select(state => state.getTokenReducer);

  try {
    const response = yield call(getDistinctJobType, userToken);
    if (response.Status === 'Success') {
      yield put(getDistinctJobTypesActions.distinctJobResponse(response.Data));
    } else {
      yield put(getDistinctJobTypesActions.distinctJobFailed());
    }
  } catch (error) {
    yield put(getDistinctJobTypesActions.distinctJobFailed({}));
  }
}
