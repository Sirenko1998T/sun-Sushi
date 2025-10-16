import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
   apiKey: "AIzaSyC5N9altWwiSP_k86WEbWuY8Y6mhwcdhG8",
   authDomain: "sun-project-df7ef.firebaseapp.com",
   projectId: "sun-project-df7ef",
   storageBucket: "sun-project-df7ef.firebasestorage.app",
   messagingSenderId: "129348699105",
   appId: "1:129348699105:web:fe2bdbc0b3bfa8902d08a0",
   measurementId: "G-5FD9S9SC5X"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };