/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestLocation(data) {
  return {
    type: types.REQUEST_LOCATION,
    data,
  };
}

export function saveLocations(areas,mrts,limit) {
  return {
    type: types.SAVE_LOCATION,
    areas,
    mrts,
    limit
  };
}

export function locationFailed() {
  return {
    type: types.FAILURE_LOCATION,
  };
}
