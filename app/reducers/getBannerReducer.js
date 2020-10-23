import createReducer from 'app/lib/createReducer';
import * as types from '../actions/types';

const initialState = {
  bannerData: [],
};

export const getBannerreducer = createReducer(initialState, {
  [types.GET_BANNER_RESPONSE](state, action) {
    return { ...state, bannerData: action.response };
  },
});
