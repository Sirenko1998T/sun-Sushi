import React, { useState, useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from '../firebase.js';

import insatgramIcon from '../assets/svgicons/insta.svg';
import tiktok from '../assets/svgicons/tiktok.svg';
import linkedinIcon from '../assets/svgicons/linkedin.svg';
import tweetIcon from '../assets/svgicons/tweet.svg';
import send from '../assets/svgicons/paper-plane-white.svg';

import Button from "./button";
import BurgerLink from "./burger-link";
import Input from "./input";
import Modal from "./modal.jsx";

import { AppContext } from "../context/appContext";
import { UserContext } from "../context/userContext";

export default function BurgerMenu() {
   const navigate = useNavigate();
   const [isOpen, setIsOpen] = useState(false);

   const { user, setUser, email,
      setEmail,
      sendEmail,
      setSendEmail,
      sendEmailSuccs, } = useContext(UserContext);

   const {

      showModalCart,
      setShowModalCart,
      showModalAcc,
      setShowModalCAcc
   } = useContext(AppContext);

   const menuRef = useRef(null);

   const outClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
         setIsOpen(false);
      }
   };

   const handleLogout = () => {
      signOut(auth)
         .then(() => {
            setUser(null);
            navigate("/login");
         })
         .catch((error) => console.log(error.message));
   };

   useEffect(() => {
      if (isOpen) {
         document.addEventListener('mousedown', outClick);
      } else {
         document.removeEventListener('mousedown', outClick);
      }

      return () => {
         document.removeEventListener('mousedown', outClick);
      };
   }, [isOpen]);

   return (
      <>
         {showModalCart && <Modal text="Log in to view your cart" />}
         {showModalAcc && <Modal text="Log in to access your account" />}

         {!isOpen && (
            <div
               className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 cursor-pointer"
               onClick={() => setIsOpen(true)}
            >
               <span className="block w-6 h-0.5 bg-gray-800 rounded"></span>
               <span className="block w-6 h-0.5 bg-gray-800 rounded"></span>
               <span className="block w-6 h-0.5 bg-gray-800 rounded"></span>
            </div>
         )}

         {isOpen && (
            <div className="fixed inset-0 z-50">
               <div className="absolute inset-0 bg-black bg-opacity-50"></div>

               <div
                  ref={menuRef}
                  className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl overflow-y-auto"
               >
                  <div className="p-6 space-y-8">


                     <div className="flex justify-end">
                        <div
                           onClick={() => setIsOpen(false)}
                           className="relative w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-gray-100 rounded-full"
                        >
                           <span className="absolute block w-6 h-0.5 bg-gray-800 rotate-45 rounded"></span>
                           <span className="absolute block w-6 h-0.5 bg-gray-800 -rotate-45 rounded"></span>
                        </div>
                     </div>


                     <BurgerLink
                        items={[
                           { label: "Home", path: "/" },
                           {
                              label: "Locations",
                              path: "https://www.google.com/maps/place/Travel+Free+Shop+Moravi%C5%A3a/",
                              external: true
                           }
                        ]}
                     />


                     {user ? (
                        <>
                           <Button
                              label="Your Cart"
                              onClick={() => navigate("/cart")}
                           />

                           <Button
                              label="My Account"
                              onClick={() => navigate("/myAccount")}
                           />

                           <Button
                              label="Logout"
                              onClick={handleLogout}
                           />
                        </>
                     ) : (
                        <Button
                           label="Login / Registration"
                           onClick={() => {
                              navigate("/login");
                              setShowModalCAcc(true);
                           }}
                        />
                     )}

                     <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-800">
                           Subscribe to Newsletter
                        </h3>

                        <div className="flex space-x-2">
                           {sendEmail ? (
                              <p>You subscribed to newsletter successfully</p>
                           ) : (
                              <>
                                 <Input
                                    placeholder="Enter your email"
                                    type="email"
                                    className="flex-1"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                 />
                                 <Button
                                    img={send}
                                    onClick={() => {
                                       setSendEmail(true);
                                       sendEmailSuccs();
                                    }}
                                 />
                              </>
                           )}
                        </div>

                        <p className="text-xs text-gray-600">
                           By providing your email address, you agree to receive marketing information and offers via email. You can unsubscribe at any time.
                        </p>
                     </div>


                     <div className="flex space-x-4 justify-center">
                        <Button img={insatgramIcon} />
                        <Button img={tiktok} />
                        <Button img={linkedinIcon} />
                        <Button img={tweetIcon} />
                     </div>
                  </div>
               </div>
            </div>
         )}
      </>
   );
}
