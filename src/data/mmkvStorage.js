import { MMKV } from 'react-native-mmkv'
// mmkv localstorage operations
export async function storeUserSessionToMMKV(phoneNumber) {

    console.log('in mmkv save')
    const storage = new MMKV()
    try {
        storage.set('userNumber', phoneNumber)

    } catch (error) {

    }
}

export async function getUserSessionFromMMKV() {
    const storage = new MMKV()
    console.log('in mmkv retreive')
    const number = storage.getString('userNumber')

    if (number != undefined) {
        return true;
    }
}
