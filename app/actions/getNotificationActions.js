import * as types from './types';

export function getNotificationRequest(params) {
  return {
    type: types.GET_NOTIFICATIONS_REQUEST,
    params,
  };
}

export function getNotificationsResponse(response) {
  return {
    type: types.GET_NOTIFICATIONS_RESPONSE,
    response,
  };
}

export function getNotificationsFailed() {
  return {
    type: types.GET_NOTIFICATIONS_FAILED,
  };
}
