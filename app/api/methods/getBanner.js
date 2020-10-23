import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function getBanner(token) {
  return Api(ApiConstants.GET_BANNER, null, 'post', token);
}
