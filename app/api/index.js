// General api to access data
import ApiConstants from './ApiConstants';
import Snackbar from 'react-native-snackbar';

export default function api(path, params, method, token) {
  let options;
  options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(token && { Authorization: 'Bearer' + ' ' + token }),
    },
    method: method,
    ...(params && { body: JSON.stringify(params) }),
  };

  return fetch(ApiConstants.BASE_URL + path, options)
    .then(resp => resp.json())
    .then(json => json)
    .catch(error => {
      setTimeout(function() {
        Snackbar.show({
          title: 'Please check your internet connection.',
          duration: Snackbar.LENGTH_LONG,
        });
      }, 500);
    });
}
