import { STORE_USERID,STORE_USERNAME } from "./constants";

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