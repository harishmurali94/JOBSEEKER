import { put, call, select } from 'redux-saga/effects';
import createProfile from 'app/api/methods/createProfile';
import * as createProfileActions  from 'app/actions/createProfileActions';
import * as loaderAction from 'app/actions/loaderActions';

// Our worker Saga that logins the user
export default function* createProfileAsync(action) {
  yield put(loaderAction.enableLoader());

  const {userToken} = yield select(
    state => state.getTokenReducer,
  );

  try{
    const response = yield call(createProfile, action.params,userToken);
    if(response.Status ===  "Success"){
        yield put(createProfileActions.createProfileResponse(response.Data,true));
        yield put(loaderAction.disableLoader({}));
        
    }else{
        yield put(createProfileActions.createProfileFailed(false));
        yield put(loaderAction.disableLoader({}));

    }
   
  }catch (error) {
    yield put(loaderAction.disableLoader({}));
    
  }
}