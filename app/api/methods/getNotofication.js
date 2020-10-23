import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function getNotification(data, token) {
  return Api(ApiConstants.GET_NOTIFICATION, data, 'post', token);
}
