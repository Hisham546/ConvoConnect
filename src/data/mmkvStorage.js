import { MMKV } from 'react-native-mmkv'
// mmkv localstorage operations
export async function storeUserSessionToMMKV(phoneNumber) {
console.log('called mmkv')
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

export async function removeDataFromMMKV() { 
   
    const storage = new MMKV();
    storage.clearStore();
}