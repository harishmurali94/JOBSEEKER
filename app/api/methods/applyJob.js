import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function applyJob(data, token) {
  return Api(ApiConstants.APPLY_JOB, data, 'post', token);
}
