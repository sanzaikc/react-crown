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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
