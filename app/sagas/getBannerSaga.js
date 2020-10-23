import { put, call, select, delay } from 'redux-saga/effects';
import * as getBannerActions from '../actions/getBannerActions';
import getBannerApi from '../api/methods/getBanner';

// Our worker Saga that logins the user
export default function* getBanner() {
  const { userToken } = yield select(state => state.getTokenReducer);

  try {
    const response = yield call(getBannerApi, userToken);
    if (response.Status === 'Success') {
      yield put(getBannerActions.requestBannerResponse(response.Data));
    } else {
      yield put(getBannerActions.requestBannerFailed());
    }
  } catch (error) {
    yield put(getBannerActions.requestBannerFailed({}));
  }
}
