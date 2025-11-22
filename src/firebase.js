import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
   apiKey: "AIzaSyC5N9altWwiSP_k86WEbWuY8Y6mhwcdhG8",
   authDomain: "sun-project-df7ef.firebaseapp.com",
   projectId: "sun-project-df7ef",
   storageBucket: "sun-project-df7ef.firebasestorage.app",
   messagingSenderId: "129348699105",
   appId: "1:129348699105:web:1523bfca7dd549412d08a0",

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);


export { db, auth };