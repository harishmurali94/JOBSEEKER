
import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function getMyJob(data,token) {
  return Api(
    ApiConstants.GET_MY_JOB ,
    data,
    'post',
    token,
  );
};