import { STORE_USERID, STORE_MESSAGES_FROM_FIREBASE,STORE_USERDATA } from "./constants";

export const storeUid = (data) => {

  return {
    type: STORE_USERID,

    payload: data,
  };
};



export const storeUserData = (data) => {

  return {
    type: STORE_USERDATA,

    payload: data,
  };
};

export const storeFirebaseMessages = (data) => {

  return {

    type: STORE_MESSAGES_FROM_FIREBASE,

    payload: data,
  }

}