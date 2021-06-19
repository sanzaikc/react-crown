import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDDDgHrr1mEfFYQO5IwixFt24IRHQZBxtk",
  authDomain: "crwn-db-2791a.firebaseapp.com",
  databaseURL: "https://crwn-db-2791a.firebaseio.com",
  projectId: "crwn-db-2791a",
  storageBucket: "crwn-db-2791a.appspot.com",
  messagingSenderId: "320756991799",
  appId: "1:320756991799:web:9eaa31f69046e0dfbcbcb2",
  measurementId: "G-MN9QBRJ7KV",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
