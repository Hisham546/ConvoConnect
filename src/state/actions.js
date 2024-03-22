import { STORE_USERID, STORE_USERNAME, STORE_MESSAGES_FROM_FIREBASE } from "./constants";

export const storeUid = (data) => {

  return {
    type: STORE_USERID,

    payload: data,
  };
};


export const storeUserName = (data) => {

  return {
    type: STORE_USERNAME,

    payload: data,
  };
};

export const storeFirebaseMessages = (data) => {

  return {

    type: STORE_MESSAGES_FROM_FIREBASE,

    payload: data,
  }

}