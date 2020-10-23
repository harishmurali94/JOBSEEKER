import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function getEarnings(data, token) {
  return Api(ApiConstants.GET_EARNINGS, data, 'post', token);
}
