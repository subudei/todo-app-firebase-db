import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  // apiKey: "AIzaSyAqIYBRmektWn1n-_HyEBcND0QjiidyB1A",
  // authDomain: "react-todo-dev-d8f50.firebaseapp.com",
  // projectId: "react-todo-dev-d8f50",
  // storageBucket: "react-todo-dev-d8f50.appspot.com",
  // messagingSenderId: "778345300194",
  // appId: "1:778345300194:web:cd75d84460e0a9b50d1ebb",
});

// export const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const storage = firebase.storage();
// const provider = new firebase.auth.GoogleAuthProvider();

// export const userProfile = async (userAuth)

export const auth = app.auth();
export const db = app.firestore();
export default app;
