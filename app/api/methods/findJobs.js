import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function findJobs(data,token) {
  return Api(ApiConstants.FIND_JOBS, data, 'post', token);
}
