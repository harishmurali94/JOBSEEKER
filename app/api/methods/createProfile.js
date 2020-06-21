import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function createProfile(data,token) {
  return Api(
    ApiConstants.CREATE_PROFILE ,
    data,
    'post',
    token,
  );
};