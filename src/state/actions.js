import { STORE_USERID } from "./constants";

export const storeUid = (data) => {

    return {
      type: STORE_USERID,
  
      payload: data,
    };
  };