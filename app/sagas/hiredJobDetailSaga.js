import { put, call, select } from 'redux-saga/effects';
import hiredJobDetails from 'app/api/methods/hiredJobDetails';
import * as hiredJobDetailAction  from 'app/actions/hiredJobDetailAction';
import * as loaderAction from 'app/actions/loaderActions';
import * as navigateActions from '../actions/navigationActions';

// Our worker Saga that logins the user
export default function* createProfileAsync(action) {
  yield put(loaderAction.enableLoader());

  const {userToken} = yield select(
    state => state.getTokenReducer,
  );

  try{
    const response = yield call(hiredJobDetails, action.params,userToken);
    if(response.Status ===  "Success"){
        yield put(hiredJobDetailAction.hiredJobDetailResponse(response.Data));
        yield put(loaderAction.disableLoader({}));
        
    }else{
        yield put(hiredJobDetailAction.hiredJobDetailFailed());
        yield put(loaderAction.disableLoader({}));

    }
   
  }catch (error) {
    yield put(hiredJobDetailAction.hiredJobDetailFailed());
    yield put(loaderAction.disableLoader({}));
    
  }
}