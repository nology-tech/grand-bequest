import firebase from "firebase/app";
import "firebase/firestore";
// import "firebase/auth";

const firebaseConfig = {

};

firebase.initializeApp(firebaseConfig);

// export const authProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();

export default firebase;