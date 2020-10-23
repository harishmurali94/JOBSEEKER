import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function getEarningDetails(data, token) {
  return Api(ApiConstants.GET_EARNINGDETAILS, data, 'post', token);
}
