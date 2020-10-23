// export action creators
import * as loginActions from './loginActions';
import * as navigationActions from './navigationActions';
import * as loaderActions from './loaderActions';
import * as otpActions from './otpActions';
import * as languageActions from './languageAction';
import * as getLocationActions from './getLocationActions';
import * as getJobTypeActions from './getJobTypeActions';
import * as findJobsActions from './findJobsActions';
import * as createProfileActions from './createProfileActions';
import * as applyJobActions from './applyJobsActions';
import * as getMyJobsAction from './getMyJobsAction';
import * as appIntroActions from './appIntroAction';
import * as getTokenAction from './getTokenAction';
import * as getInformationActions from './getInformationActions';
import * as getBannerActions from './getBannerActions';
import * as getDistinctJobTypesActions from './getDistinctJobTypesActions';
import * as getNotificationActions from './getNotificationActions';
import * as getEarningsActions from './getEarningsActions';
import * as getEarningDetailsActions from './getEarningDetailsActions';

export const ActionCreators = Object.assign(
  {},
  loginActions,
  applyJobActions,
  navigationActions,
  loaderActions,
  otpActions,
  languageActions,
  getJobTypeActions,
  getLocationActions,
  findJobsActions,
  createProfileActions,
  getMyJobsAction,
  appIntroActions,
  getTokenAction,
  getInformationActions,
  getBannerActions,
  getDistinctJobTypesActions,
  getNotificationActions,
  getEarningsActions,
  getEarningDetailsActions,
);
