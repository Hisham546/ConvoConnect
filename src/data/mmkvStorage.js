import { MMKV } from 'react-native-mmkv'


export async function storeUserSessionToMMKV() {

console.log('in mmkv save')
    const storage = new MMKV()
    try {
        storage.set('userNumber', phoneNumber)
        // Congrats! You've just stored your first value!
    } catch (error) {
        // There was an error on the native side
    }
}

export async function getUserSessionFromMMKV() { 
    const storage = new MMKV()
console.log('in mmkv retreive')
    const number = storage.getString('userNumber')
    //  console.log(number, 'token generated')
    if (number != undefined) {
        navigation.navigate('Dashboard')
    }
}
