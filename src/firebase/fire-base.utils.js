import firebase from 'firebase/app';
// import firebase from 'https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js';
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import 'firebase/firestore';
import 'firebase/auth';
import { getAuth,initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";

const config={
    apiKey: "AIzaSyDEcMs7b0fxEE0_pxHINNk_0YeRIfom6YU",
    authDomain: "crwn-db-11344.firebaseapp.com",
    projectId: "crwn-db-11344",
    databaseURL:'https://crwn-db.firebaseio.com',
    storageBucket: "crwn-db-11344.appspot.com",
    messagingSenderId: "604416942236",
    appId: "1:604416942236:web:57ede7da42d90b1c040d59",
    measurementId: "G-6JWCKK4442"
  };

export const start=initializeApp(config);

  

  export const  auth=getAuth();
  export const firestore=firestore();
//   export const signOut=firebase.signOut();

  const provider =new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle=()=>getAuth.signInWithPopup(provider);

// const GoogleAuthProvider=firebase.GoogleAuthProvider();


  export default firebase;