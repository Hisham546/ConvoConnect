import { MMKV } from 'react-native-mmkv'
// mmkv localstorage operations
export async function storeUserSessionToMMKV(phoneNumber) {

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
