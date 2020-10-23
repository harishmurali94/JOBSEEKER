import { put, call, select } from 'redux-saga/effects';
import getAreas from 'app/api/methods/getAreas';
import * as getLocationActions from 'app/actions/getLocationActions';
import * as loaderAction from 'app/actions/loaderActions';
import * as navigateActions from 'app/actions/navigationActions';
// Our worker Saga that logins the user
export default function* getLocations(action) {
  yield put(loaderAction.enableLoader());
  try {
    const response = yield call(getAreas, action.data);
    // console.log("response",JSON.stringify(response,null,2));
    if (response.Status === 'Success') {
      const zoneArea = response.Data.map((zone, zoneIndex) => {
        return zone.areaByzone;
      });
      const mrtArea = response.Data.map(mrt => {
        return mrt.areaBymrt;
      });

      const mrtCustom = mrtArea[0].map((mrts, mrtIn) => {
        if (mrtIn == 0) {
          mrts.isSelected = true;
        } else {
          mrts.isSelected = false;
        }

        mrts.arealistmrt.map(it => {
          it.isSelected = false;
          return it;
        });
        return mrts;
      });

      const areaCustom = zoneArea[0].map((zones, zonIndex) => {
        // zones.isSelected = false;
        if (zonIndex == 0) {
          zones.isSelected = true;
        } else {
          zones.isSelected = false;
        }
        zones.arealist.map(it => {
          it.isSelected = false;
          return it;
        });
        return zones;
      });

      yield put(
        getLocationActions.saveLocations(
          areaCustom,
          mrtCustom,
          response.Maxlimit,
        ),
      );
      // yield put(loginActions.otpVerified())
      yield put(loaderAction.disableLoader({}));
      // yield put(loaderAction.disableLoader({}));
      // yield call(navigateActions.navigaetToBoarding());
    } else if (response.Status === 'Failure') {
      yield put(loaderAction.disableLoader({}));
      console.log('response failure in get locations', response);
    }
  } catch (error) {
    yield put(loaderAction.disableLoader({}));
    console.log('error in get language', error);
  }
}
