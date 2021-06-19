import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCcwpgsL0sRs1E2eh7wSOBX4_3y2tIPxcI",
  authDomain: "facebook-clone-105cb.firebaseapp.com",
  projectId: "facebook-clone-105cb",
  storageBucket: "facebook-clone-105cb.appspot.com",
  messagingSenderId: "420286611940",
  appId: "1:420286611940:web:43b4a8785fcef94ffb87f1",
  measurementId: "G-DEBFSWER3T",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
