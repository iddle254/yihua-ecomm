import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBmBvb8oNgvXEdoGdg8-OjzCsyfFjiJHwE",
  authDomain: "yihua-ecomm.firebaseapp.com",
  projectId: "yihua-ecomm",
  storageBucket: "yihua-ecomm.appspot.com",
  messagingSenderId: "922123270462",
  appId: "1:922123270462:web:07fb2db6decfe398eb946f",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
