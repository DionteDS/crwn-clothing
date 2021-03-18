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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("EJMYpGKaFH14iAjv4tem")
  .collection("carItems")
  .doc("rknvSdJInItWeRbGkHX6");

firestore.doc("/users/EJMYpGKaFH14iAjv4tem/carItems/rknvSdJInItWeRbGkHX6");
firestore.collection("/users/EJMYpGKaFH14iAjv4tem/carItems/");

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
