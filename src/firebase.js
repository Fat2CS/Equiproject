import React, { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  push,
  set,
  update,
  onValue,
  remove
} from "firebase/database";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBszI99S06zXBZ1e-IzzlfTuh7trMymW2Q",
  authDomain: "equinterim-5103d.firebaseapp.com",
  databaseURL:
    "https://equinterim-5103d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "equinterim-5103d",
  storageBucket: "equinterim-5103d.appspot.com",
  messagingSenderId: "517618343458",
  appId: "1:517618343458:web:feead07bdaba2f73ddb47b",
  measurementId: "G-TVZNM9CRJK"
};
// Create a Firebase context
const FirebaseContext = createContext(null);

// Firebase provider to wrap your app with
export const FirebaseProvider = ({ children }) => {
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const auth = getAuth(app);

  const firebase = {
    app,
    db,
    auth,
    push,
    ref,
    set,
    update,
    onValue,
    remove,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
  };

  return (
    <FirebaseContext.Provider value={firebase}>
      {children}
    </FirebaseContext.Provider>
  );
};

// Custom hook to consume the Firebase context
export const useFirebase = () => {
  return useContext(FirebaseContext);
};
