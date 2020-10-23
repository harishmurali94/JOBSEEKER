import { put, call, select, delay } from 'redux-saga/effects';
// import getJobDetails from 'app/api/methods/getJobDetails';
import * as getNotificationActions from '../actions/getNotificationActions';
import getNotofication from '../api/methods/getNotofication';

// Our worker Saga that logins the user
export default function* getNotofications(action) {
  const { userToken } = yield select(state => state.getTokenReducer);

  try {
    const response = yield call(getNotofication, action.params, userToken);
    if (response.Status === 'Success') {
      yield put(getNotificationActions.getNotificationsResponse(response.Data));
    } else {
      yield put(getNotificationActions.getNotificationsFailed());
    }
  } catch (error) {
    yield put(getNotificationActions.getNotificationsFailed({}));
  }
}
