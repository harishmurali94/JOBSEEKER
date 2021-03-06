/* App config for apis
 */
const ApiConstants = {
  // BASE_URL: 'http://119.82.97.221/ATJ',
  BASE_URL: 'https://uetracksg.com/AnytimeOTAPI',
  GET_OTP: '/api/Login/getOTPbyPhone',
  VERIFY_OTP: '/api/Login/verifyOTP',
  GET_JOB_TYPE: '/api/JobSeeker/getJobTypes',
  GET_LOCATIONS: '/api/JobSeeker/getLocations',
  FIND_JOBS: '/api/JobSeeker/getJobList',
  GET_JOB_DETAILS: '/api/JobSeeker/getJobDetails',
  CREATE_PROFILE: '/api/JobSeeker/createJSProfile',
  APPLY_JOB: '/api/JobSeeker/applyforJob',
  GET_MY_JOB: '/api/JobSeeker/getMyJobs',
  GET_TOKEN: '/token',
  HIRED_JOB_DETAILS: '/api/JobSeeker/getMyHiredJobjetails',
  GET_INFO: '/api/JobSeeker/getInformation',
  GET_BANNER: '/api/Banner/Active',
  GET_DISTINCTJOBTYPE: '/api/JobSeeker/getDistinctJobTypes',
  GET_NOTIFICATION: '/api/JobSeeker/getNotifications',
  GET_EARNINGS: '/api/JobSeeker/getEarnings',
  GET_EARNINGDETAILS: '/api/JobSeeker/getEarningDetails',
};

export default ApiConstants;
