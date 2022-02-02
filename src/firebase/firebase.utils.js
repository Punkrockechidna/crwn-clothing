import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {

    apiKey: "AIzaSyBeribDr2XZg7NXLu9nsJwb-e0hss-fOko",

    authDomain: "crwn-db-4e717.firebaseapp.com",

    projectId: "crwn-db-4e717",

    storageBucket: "crwn-db-4e717.appspot.com",

    messagingSenderId: "697074158839",

    appId: "1:697074158839:web:79a9b23c765502130457f2",

    measurementId: "G-BYHJPNVPBG"

};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;