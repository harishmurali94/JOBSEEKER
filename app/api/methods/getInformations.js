import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function getInformations(data, token) {
  return Api(ApiConstants.GET_INFO, data, 'post', token);
}
