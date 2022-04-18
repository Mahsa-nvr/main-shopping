import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { collection, getDocs } from "firebase/firestore"; 
import { useEffect, useState } from 'react';

const firebaseConfig = {
    apiKey: "AIzaSyBN54EtaepistJ9Uv6HRIYzdTCu8ht9jjI",
    authDomain: "crwn-db-e4818.firebaseapp.com",
    projectId: "crwn-db-e4818",
    storageBucket: "crwn-db-e4818.appspot.com",
    messagingSenderId: "963865245201",
    appId: "1:963865245201:web:69abfc712f7dfad118e3b0",
    measurementId: "G-V82C6FNW09"
};
const app = initializeApp(firebaseConfig);
export const fireStore = getFirestore();

export const auth = getAuth(app);

// export const createUserProfileDocument = async (userAuth, additionalData) => {
//     if(!userAuth) return ;
//     console.log('test', getDocs(collection(fireStore, "users")));
//     const querySnapshot = await getDocs(collection(fireStore, "users"));
//     console.log('querySnapshot', querySnapshot);
//     querySnapshot.forEach((doc) => {
//       console.log(`${doc.id} => ${doc.data()}`);
//     });
// }

export function signup(email, password, displayname) {
  console.log('displayName', displayname);
  return  createUserWithEmailAndPassword(auth,email, password, displayname )
}

export function signin(email, password) {
  return  signInWithEmailAndPassword(auth,email, password )
}

export function logout() {
  return signOut(auth);
}

// custom hook 

export function useAuth() {
  const [currentUser, setCurrentUser ] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [currentUser])
  return currentUser;
}




