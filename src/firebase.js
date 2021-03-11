import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA67EY4DkA-6q0T7mLJ2C2tgcoYTmuR3K0",
  authDomain: "clone-bf97e.firebaseapp.com",
  projectId: "clone-bf97e",
  storageBucket: "clone-bf97e.appspot.com",
  messagingSenderId: "381217754773",
  appId: "1:381217754773:web:0aa78b64a670b88addd59c",
  measurementId: "G-ZMSZRKJ2PS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
//initialize db
const auth = firebase.auth();
//auth functions

export { db, auth };
