import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdBTWbDPCmlZ9Mi_zofVM72jsbW_737t8",
  authDomain: "react-facebook-520f3.firebaseapp.com",
  projectId: "react-facebook-520f3",
  storageBucket: "react-facebook-520f3.appspot.com",
  messagingSenderId: "180506329359",
  appId: "1:180506329359:web:ff0c0badbbb152ac243e7a",
};

//   Use this  to initialized firebase app
const firebaseapp = firebase.initializeApp(firebaseConfig);

// Use these for db, auth & provider
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.FacebookAuthProvider();
const storage = firebase.storage();

export { db, auth, provider, storage };
