import React, { useContext } from "react";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

import Button from "../components/button";
import Input from "../components/input";
import { UserContext } from "../context/userContext";

export default function Register() {
   const db = getFirestore();
   const auth = getAuth();
   const navigate = useNavigate();
   const { email, setEmail, password, setPassword, userName, setUserName, userPhone, setUserPhone, setUser } = useContext(UserContext);

   const handleRegistration = async () => {
      try {
         const userCredential = await createUserWithEmailAndPassword(auth, email.trim(), password);
         const user = userCredential.user;

         setUser(user);

         await setDoc(doc(db, 'users', user.uid), {
            email: email,
            name: userName,
            phone: userPhone
         });

         navigate('/myAccount');
      } catch (error) {
         if (error.code === "auth/email-already-in-use") {
            alert("Этот email уже зарегистрирован. Попробуйте войти.");
         } else {
            console.error(error.code, error.message);
            alert(error.message);
         }
      }
   };


   return (
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
         <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">REGISTRATION</h2>
         <p className="text-sm text-gray-600 text-center mb-8">For email: {email}</p>

         <div className="space-y-6">
            <p className="text-sm font-medium text-gray-700 mb-2">YOUR EMAIL</p>
            <Input
               placeholder="example@email.com"
               type="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}


            />
            <p className="text-sm font-medium text-gray-700 mb-2">User name</p>
            <Input placeholder="Enter your username" type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />

            <p className="text-sm font-medium text-gray-700 mb-2">Phone number</p>
            <Input placeholder="+381 11 111 1111" type="tel" value={userPhone} onChange={(e) => setUserPhone(e.target.value)} />

            <p className="text-sm font-medium text-gray-700 mb-2">Password</p>
            <Input placeholder="Enter your future password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <div>
               <Input type="checkbox" />
               <p>I accept terms and conditions</p>
            </div>

            <Button
               label="REGISTER"
               onClick={handleRegistration}
               className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
            />
         </div>
      </div>
   );
}
