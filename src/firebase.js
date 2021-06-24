import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
// import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsKrLHSZ39YkFGAZ5102GTxXdIrgGZ1nM",
  authDomain: "grand-bequest-8ee46.firebaseapp.com",
  projectId: "grand-bequest-8ee46",
  storageBucket: "grand-bequest-8ee46.appspot.com",
  messagingSenderId: "172940441785",
  appId: "1:172940441785:web:051ee8e4c8d96b19128368",
};

firebase.initializeApp(firebaseConfig);

// export const authProvider = new firebase.auth.GoogleAuthProvider();

const storage = firebase.storage();

export const firestore = firebase.firestore();

export { firebase as default, storage };


