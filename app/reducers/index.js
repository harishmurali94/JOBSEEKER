/*
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as loginReducer from './loginReducer';
import * as languageReducer from './languageReducer';
import * as getLocationReducer from './getLocationReducer';
import * as getJobTypeReducer from './getJobTypeReducer';
import * as createProfileReducer from './createProfileReducer';
import * as jobListReducer from './jobListReducer';
import * as getJobDetailreducer from './getJobDetailreducer';
import * as applyJobReducer from './applyJobReducer';
import * as getMyJobsReducer from './getMyJobsReducer'
import * as appIntroReducer from './appIntroReducer';
import * as getTokenReducer from './getTokenReducer';
import * as hiredJobDetailReducer from './hiredJobDetailReducer';

export default Object.assign(
  loginReducer,
  loadingReducer,
  languageReducer,
  getLocationReducer,
  getJobTypeReducer,
  createProfileReducer,
  jobListReducer,
  getJobDetailreducer,
  applyJobReducer,
  getMyJobsReducer,
  appIntroReducer,
  getTokenReducer,
  hiredJobDetailReducer
);
