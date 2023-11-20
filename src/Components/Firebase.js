import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyAOl4GfyLzOEECEExGYNGzWNSh_4yYGrV4",
  authDomain: "crypto-login-f2741.firebaseapp.com",
  projectId: "crypto-login-f2741",
  storageBucket: "crypto-login-f2741.appspot.com",
  messagingSenderId: "508328490927",
  appId: "1:508328490927:web:ad0014c87de4086c4f615a"
};

// Initialize Firebase
const firebaseDB=firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();
const auth=firebase.auth();

export {auth};
export default firebaseDB.database().ref();

