import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
  profileCreated: false,
  userID: '',
};

export const createProfileReducer = createReducer(initialState, {
  [types.CREATE_PROFILE_RESPONSE](state, action) {
    return { ...state, profileCreated: action.status, userID: action.userID };
  },
  [types.CREATE_PROFILE_FAILED](state, action) {
    return { ...state, profileCreated: action.status };
  },
  [types.PROFILE_VERIFIED](state, action) {
    return { ...state, profileCreated: true };
  },
});
