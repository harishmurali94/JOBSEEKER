

import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function getAreas(data) {
  return Api(
    ApiConstants.GET_LOCATIONS ,
    data,
    'post',
    null,
  );
};