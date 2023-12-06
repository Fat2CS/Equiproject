// Import the functions you need from the SDKs you need

import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBszI99S06zXBZ1e-IzzlfTuh7trMymW2Q",
  authDomain: "equinterim-5103d.firebaseapp.com",
  projectId: "equinterim-5103d",
  storageBucket: "equinterim-5103d.appspot.com",
  messagingSenderId: "517618343458",
  appId: "1:517618343458:web:feead07bdaba2f73ddb47b",
  measurementId: "G-TVZNM9CRJK"
};

// Initialize Firebase
// Initialize Firebase
// const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
// const db = getFirestore(app); 
// // const db = getFirestore();
// export db
// export const auth = getAuth(app);

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage=getStorage(app);
export { db, auth,storage };