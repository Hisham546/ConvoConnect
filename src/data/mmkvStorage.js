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
   // console.log(number, '.....getUserSessionFromMMKV.')
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


export async function removeDataFromMMKV(Key) {

    const storage = new MMKV();
    try {

        const userRemoved = storage.delete(Key);
        if (userRemoved == undefined) {
            return true
        } else {
            return false
        }
    } catch (error) {
       // console.log(error, '.........removeItem error')
    }
}


export async function storeUserIdMMKV(userid) {
 console.log(userid,'.........inmmkv')
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

    // if (userId !== undefined && typeof userId === 'string') {
    //     return userId;
    // } else {
    //     console.log('Invalid user ID format:', userId);
    //     return null; // or handle the case where the user ID is not a valid string
    // }

}
