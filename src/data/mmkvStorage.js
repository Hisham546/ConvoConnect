import { MMKV } from 'react-native-mmkv'




// mmkv localstorage operations


export async function storeUserSessionToMMKV(phoneNumber) {
  //  console.log('called mmkv')
    const storage = new MMKV()
    try {
        storage.set('userNumber', phoneNumber)

    } catch (error) {

    }
}

export async function getUserSessionFromMMKV() {
    const storage = new MMKV()

    const number = storage.getString('userNumber')

    if (number != undefined) {
        return true;
    }
}

export async function getNumberFromMMKV() {
    const storage = new MMKV()

    const number = storage.getString('userNumber')

    if (number != undefined) {
        return number;
    }
}


export async function removeDataFromMMKV(keys) {
    const storage = new MMKV();
    try {
        keys.forEach(key => {
            storage.delete(key);
        });
        return true;
    } catch (error) {
        // Handle error if needed
        console.error(error);
        return false;
    }
}


export async function storeUserIdMMKV(userid) {
 console.log(userid,'.........userid stored to mmkv')
    const storage = new MMKV()
    try {
        storage.set('userid',  userid.toString())

    } catch (error) {

    }
}
//user id pattern have issues
export async function fetchUserIdMMKV() {
    const storage = new MMKV();
    const userId = storage.getString('userid');

    console.log('Retrieved user ID:', userId);

  return userId

}



export async function storeFCMToMMKV(Fcmtoken) {
    //  console.log('called mmkv')
      const storage = new MMKV()
      try {
          storage.set('fcmtoken', Fcmtoken)
  
      } catch (error) {
  
      }
  }
  
  export async function getFCMFromMMKV() {
      const storage = new MMKV()
  
      const fcmtoken = storage.getString('fcmtoken')
     // console.log(number, '.....getUserSessionFromMMKV.')
      if (fcmtoken != undefined) {
          return fcmtoken;
      }
  }