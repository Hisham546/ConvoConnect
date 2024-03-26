import * as React from 'react';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyASlGwxyn3xqs8y9O_B_2aPSHiYn41Ubgg",
    authDomain: "whatsapp-clone.firebaseapp.com",
    projectId: "whatsapp-clone-470f4",
    storageBucket: ".......",
    messagingSenderId: "715629424810",
    appId: "1:715629424810:android:095b0b87c9707c2c5820d3",
    databaseURL: "https://whatsapp-clone-470f4-default-rtdb.firebaseio.com/",
}
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default () => {
    return { firebase, auth };
};