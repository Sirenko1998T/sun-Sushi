import React, { useState, useRef, useEffect } from "react";
import insatgramIcon from '../assets/svgicons/insta.svg'
import tiktok from '../assets/svgicons/tiktok.svg'
import linkedinIcon from '../assets/svgicons/linkedin.svg'
import Button from "./button";

import tweetIcon from '../assets/svgicons/tweet.svg'
import send from '../assets/svgicons/paper-plane-white.svg'
import BurgerLink from "./burger-link";
import Input from "./input";

export default function BurgerMenu() {
   const [isOpen, setIsOpen] = useState(false);
   const [email, setEmail] = useState("");
   const [sendEmail, setSendEmail] = useState(false);

   const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

   let menuRef = useRef(null);
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

   let outClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
         setIsOpen(false);
      };
   }


   useEffect(() => {
      if (isOpen) {
         document.addEventListener('mousedown', outClick);
      }
      else {
         document.removeEventListener('mousedown', outClick);
      }

      return () => {
         document.removeEventListener('mousedown', outClick);
      };
   }, [isOpen])

   return (<>
      {!isOpen && (<div
         className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 cursor-pointer "
         onClick={() => setIsOpen(true)}
      >
         <span className="block w-6 h-0.5 bg-gray-800 rounded"></span>
         <span className="block w-6 h-0.5 bg-gray-800 rounded"></span>
         <span className="block w-6 h-0.5 bg-gray-800 rounded"></span>
      </div>)}


      {isOpen && (
         <div className="fixed inset-0 z-50  ">
            <div className="absolute inset-0   bg-opacity-50"></div>
            <div ref={menuRef} className="absolute right-0 top-0 h-full w-80 max-w-full bg-white shadow-xl overflow-y-auto">
               <div className="p-6 space-y-8">
                  <div className="flex justify-end">
                     <div onClick={() => setIsOpen(false)} className="relative w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-gray-100 rounded-full">
                        <span className="absolute block w-6 h-0.5 bg-gray-800 rotate-45 rounded"></span>
                        <span className="absolute block w-6 h-0.5 bg-gray-800 -rotate-45 rounded"></span>
                     </div>
                  </div>

                  <BurgerLink items={[
                     { label: 'Home', path: '/' },
                     { label: 'Locations', path: "https://www.google.com/maps/place/Travel+Free+Shop+Moravi%C5%A3a/@45.2519589,21.2415487,14z/data=!4m9!1m2!2m1!1sMoon+Sushi+at+Makedonska+31,+Beograd%7CMoon+Sushi+novi+beograd+at+Bulevar+Zorana+%C4%90in%C4%91i%C4%87a+106a!3m5!1s0x47501035f848a5cf:0xf262c5221543fdde!8m2!3d45.2395199!4d21.2672306!16s%2Fg%2F1hc1b554f?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D", external: true },
                     { label: 'Your Cart', path: '/cart' },
                     { label: 'Login / Registration', path: '/login' }
                  ]} />

                  <div className="space-y-4">
                     <h3 className="text-lg font-semibold text-gray-800">Subscribe to Newsletter</h3>
                     <div className="flex space-x-2">
                        {sendEmail ? <p>You subscribed to newsletter successfully</p> : (<> <Input placeholder='Enter your email' type='email' className="flex-1" value={email} onChange={(e) => setEmail(e.target.value)} />
                           <Button img={send} onClick={() => {
                              setSendEmail(true);
                              sendEmailSuccs()

                           }} /></>)}

                     </div>
                     <p className="text-xs text-gray-600">
                        By providing your email address, you agree to receive marketing information and offers via email. You can unsubscribe at any time using the unsubscribe link.
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