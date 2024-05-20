import auth from '@react-native-firebase/auth';
import messaging from '@react-native-firebase/messaging';

import firebaseConfig from '../../../config/firebase/setup';




export async function signInWithPhoneNumber(number: string) {

  const { auth } = firebaseConfig();

  // storeUserDetailsRealm(number)
  //  storeUserSessionToMMKV(number)
  try {
    const confirmation = await auth().signInWithPhoneNumber(number);

    if (confirmation.state != "error") {
      return confirmation


      //removeLogin()

    }
  } catch (error: unknown) {
    // Handle error as a Firebase error type or a generic error
    if (typeof error === "object" && error !== null && "code" in error) {
      const firebaseError = error as { code: string; message: string };
      if (firebaseError.code === 'auth/too-many-requests') {
        return firebaseError;
      } else if (firebaseError.code === 'auth/user-disabled') {
        return firebaseError;
      } else {
        return { code: 'unknown', message: 'An unknown error occurred' };
      }
    }
    // In case error is not a Firebase error
    return { code: 'unknown', message: 'An unknown error occurred' };
  }
}


export async function verifyCode(confirm: any, code: any) {
  try {
    await confirm.confirm(code);
    return true;
  } catch (error: any) {
    console.log(error);

    // Handle specific error cases if needed
    if (error.code === 'auth/invalid-verification-code') {
      console.log("Invalid verification code");
    } else if (error.code === 'auth/user-disabled') {
      console.log("User disabled");
    } else if (error.code === 'auth/invalid-credential') {
      console.log("Invalid credential");
    } else {
      console.log("Unknown error occurred during verification");
    }

    // Return false to indicate failure
    return false;
  }
}
