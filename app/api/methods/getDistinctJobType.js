import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function getDistinctJobType(token) {
  return Api(ApiConstants.GET_DISTINCTJOBTYPE, null, 'post', token);
}
