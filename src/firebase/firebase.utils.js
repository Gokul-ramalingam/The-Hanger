import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyCVQ5tUR3BrrYC2MLab5MgI_fZ5QHdOJi4",
    authDomain: "the-hanger-1a3f8.firebaseapp.com",
    databaseURL: "https://the-hanger-1a3f8.firebaseio.com",
    projectId: "the-hanger-1a3f8",
    storageBucket: "the-hanger-1a3f8.appspot.com",
    messagingSenderId: "425356424836",
    appId: "1:425356424836:web:2512fbcfa185b511ca74d1",
    measurementId: "G-FEL3J5J960"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;