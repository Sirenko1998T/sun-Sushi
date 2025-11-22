import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import React, { createContext, useState, useEffect } from "react";
export const UserContext = createContext();
export const UserProvider = ({ children }) => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [user, setUser] = useState(null);
   const [userName, setUserName] = useState('');
   const [userPhone, setUserPhone] = useState('');
   const [sendEmail, setSendEmail] = useState(false);
   const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


   const sendEmailSuccs = () => {
      if (isValidEmail(email)) {
         setSendEmail(true);
         setEmail('');
      } else {
         alert("Please enter a valid email");
         setSendEmail(false);
         setEmail('');
      }
   }
   const auth = getAuth()
   const db = getFirestore();
   const handleLogin = () => {
      signInWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            setUser(userCredential.user);
         })
         .catch((error) => console.error(error.code, error.message));
   };

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
         setUser(currentUser);

         if (currentUser) {
            const docRef = doc(db, 'users', currentUser.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
               const data = docSnap.data();
               setUserName(data.name);
               setUserPhone(data.phone);
            }
         } else {
            setUserName('');
            setUserPhone('');
         }
      });

      return () => unsubscribe();
   }, []);

   let value = { sendEmail, setSendEmail, isValidEmail, sendEmailSuccs, setEmail, email, password, setEmail, setPassword, user, setUser, userName, setUserName, userPhone, setUserPhone, handleLogin };

   return (
      <UserContext.Provider value={value}>
         {children}
      </UserContext.Provider>
   )
}
