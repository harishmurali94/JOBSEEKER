import * as types from './types';



export function getT0kenRequest() {
  return {
    type: types.GET_TOKEN
  };
};

export function saveToken(token){
  console.log("action inside token",token);
    return{
        type: types.SET_TOKEN,
        token
    }
}
