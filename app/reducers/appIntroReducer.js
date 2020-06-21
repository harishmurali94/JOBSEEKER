import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
 isAppIntro:false
};

export const appIntroReducer = createReducer(initialState, {
  [types.CHANGE_APP_INTRO](state) {
    return { ...state, isAppIntro:true };
  }
});