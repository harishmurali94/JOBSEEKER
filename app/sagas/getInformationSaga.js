import { put, call, select, delay } from 'redux-saga/effects';
// import getJobDetails from 'app/api/methods/getJobDetails';
import * as getInformationActions from '../actions/getInformationActions';
import getInformations from '../api/methods/getInformations';

// Our worker Saga that logins the user
export default function* getInformation(action) {
  const { userToken } = yield select(state => state.getTokenReducer);

  try {
    const response = yield call(getInformations, action.params, userToken);
    if (response.Status === 'Success') {
      yield put(getInformationActions.getInformationResponse(response.Data));
    } else {
      yield put(getInformationActions.getInformationFailed());
    }
  } catch (error) {
    yield put(getInformationActions.getInformationFailed({}));
  }
}
