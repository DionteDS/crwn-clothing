import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB6bVZHcSNoM7yWd7n5s3lR1gDipJYyF3Y",
  authDomain: "crwn-db-cfcb0.firebaseapp.com",
  projectId: "crwn-db-cfcb0",
  storageBucket: "crwn-db-cfcb0.appspot.com",
  messagingSenderId: "813273469768",
  appId: "1:813273469768:web:9706cd3ad0c7b1e800197d",
  measurementId: "G-FGSX7FQEH2",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  try {
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
        console.log("error creating user", error.message);
      }
    }
    return userRef;
  } catch (err) {
    console.log(err);
  }
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
