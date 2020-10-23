// /* Redux saga class
//  * logins the user into the app
//  * requires username and password.
//  * un - username
//  * pwd - password
//  */

// import { put, call, all, select } from 'redux-saga/effects';
// import verifyOTP from 'app/api/methods/verifyOTP';
// import getJobType from 'app/api/methods/getJobType';

// import * as loaderAction from 'app/actions/loaderActions';
// import * as getLocationActions from 'app/actions/getLocationActions';
// import * as getJobTypeActions from 'app/actions/getJobTypeActions';
// import * as loginActions from '../actions/loginActions';
// import * as getTokenAction from '../actions/getTokenAction';
// import getToken from '../api/methods/getToken';
// import * as createProfileActions from '../actions/createProfileActions';

// // Our worker Saga that logins the user
// export default function* otpAsyn(action) {
//   yield put(loaderAction.enableLoader());
//   let data = {
//     countryCode: '+65',
//     userId: 1,
//   };

//   try {
//     const [otpResponse, jobTypeResponse, tokenResponse] = yield all([
//       call(verifyOTP, action.data),
//       call(getJobType),
//       call(getToken),
//     ]);
//     if (
//       otpResponse.Status === 'Failure' &&
//       jobTypeResponse.Status === 'Success'
//     ) {
//       const jobTypes = jobTypeResponse.Data.map(item => {
//         item.isSelected = false;
//         return item;
//       });
//       yield put(getTokenAction.saveToken(tokenResponse.access_token));
//       yield put(
//         getJobTypeActions.saveJobTypes(jobTypes, jobTypeResponse.Maxlimit),
//       );
//       yield put(getLocationActions.requestLocation(data));
//       // yield put(
//       //   loginActions.otpVerified(
//       //     otpResponse.Data[0].userId,
//       //     otpResponse.Data[0].userType,
//       //   ),
//       // );
//       yield put(loaderAction.disableLoader({}));
//     } else if (otpResponse.Status === 'Success') {
//       const jobTypes = jobTypeResponse.Data.map(item => {
//         item.isSelected = false;
//         return item;
//       });

//       yield put(getTokenAction.saveToken(tokenResponse.access_token));
//       yield put(
//         getJobTypeActions.saveJobTypes(jobTypes, jobTypeResponse.Maxlimit),
//       );
//       yield put(getLocationActions.requestLocation(data));
//       if (otpResponse.Data[0].userType === 1) {
//         yield put(createProfileActions.profileVerified());
//         yield put(
//           createProfileActions.createProfileResponse(
//             otpResponse.Data[0].userId,
//             true,
//           ),
//         );
//       } else {
//         yield put(
//           loginActions.otpVerified(
//             otpResponse.Data[0].userId,
//             otpResponse.Data[0].userType,
//           ),
//         );
//       }

//       // yield put(loaderAction.disableLoader({}));
//     }
//   } catch (error) {
//     yield put(loaderAction.disableLoader({}));
//   }
// }
/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */

import { put, call, all, select } from 'redux-saga/effects';
import verifyOTP from 'app/api/methods/verifyOTP';
import getJobType from 'app/api/methods/getJobType';

import * as loaderAction from 'app/actions/loaderActions';
import * as getLocationActions from 'app/actions/getLocationActions';
import * as getJobTypeActions from 'app/actions/getJobTypeActions';
import * as loginActions from '../actions/loginActions';
import * as getTokenAction from '../actions/getTokenAction';
import getToken from '../api/methods/getToken';
import * as createProfileActions from '../actions/createProfileActions';

// Our worker Saga that logins the user
export default function* otpAsyn(action) {
  yield put(loaderAction.enableLoader());
  let data = {
    countryCode: '+65',
    userId: 1,
  };
  try {
    const [otpResponse, jobTypeResponse, tokenResponse] = yield all([
      call(verifyOTP, action.data),
      call(getJobType),
      call(getToken),
    ]);
    if (
      otpResponse.Status === 'Failure' &&
      jobTypeResponse.Status === 'Success'
    ) {
      const jobTypes = jobTypeResponse.Data.map(item => {
        item.isSelected = false;
        return item;
      });
      yield put(getTokenAction.saveToken(tokenResponse.access_token));
      yield put(
        getJobTypeActions.saveJobTypes(jobTypes, jobTypeResponse.Maxlimit),
      );
      yield put(getLocationActions.requestLocation(data));
      // yield put(
      //   loginActions.otpVerified(
      //     otpResponse.Data[0].userId,
      //     otpResponse.Data[0].userType,
      //   ),
      // );
      yield put(loaderAction.disableLoader({}));
    } else if (otpResponse.Status === 'Success') {
      const jobTypes = jobTypeResponse.Data.map(item => {
        item.isSelected = false;
        return item;
      });
      // yield put(createProfileActions.profileVerified());

      // createProfileActions.createProfileResponse(otpResponse.userID, true);

      yield put(getTokenAction.saveToken(tokenResponse.access_token));
      yield put(
        getJobTypeActions.saveJobTypes(jobTypes, jobTypeResponse.Maxlimit),
      );
      yield put(getLocationActions.requestLocation(data));
      yield put(
        loginActions.otpVerified(
          otpResponse.Data[0].userId,
          otpResponse.Data[0].userType,
        ),
      );
      // yield put(loaderAction.disableLoader({}));
    }
  } catch (error) {
    yield put(loaderAction.disableLoader({}));
  }
}
