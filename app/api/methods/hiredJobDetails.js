import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function hiredJobDetails(data,token) {
  return Api(ApiConstants.HIRED_JOB_DETAILS, data, 'post', token);
}
