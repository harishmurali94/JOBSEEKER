import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';
import { ActionSheetIOS } from 'react-native';

const initialState = {
  areaZones: [],
  areaMRTS:[],
  maxlimit:0
};

export const getLocationReducer = createReducer(initialState, {
  [types.SAVE_LOCATION](state, action) {
    console.log("action reducer in location reducer",action)
    return { 
      ...state, 
      areaZones: action.areas,
      areaMRTS: action.mrts,
      maxlimit:action.limit
    };
  },
});
