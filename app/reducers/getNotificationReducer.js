import createReducer from 'app/lib/createReducer';
import * as types from '../actions/types';

const initialState = { notifData: [] };

export const getNotificationreducer = createReducer(initialState, {
  [types.GET_NOTIFICATIONS_RESPONSE](state, action) {
    return { ...state, notifData: action.response };
  },
});
