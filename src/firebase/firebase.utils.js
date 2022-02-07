
// import { getAuth, signInWithRedirect  } from "firebase/auth";

import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

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
export const auth = getAuth(app);