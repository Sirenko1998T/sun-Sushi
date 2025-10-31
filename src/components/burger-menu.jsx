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
   let menuRef = useRef(null);

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
         className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 cursor-pointer"
         onClick={() => setIsOpen(true)}
      >
         <span className="block w-6 h-0.5 bg-gray-800 rounded"></span>
         <span className="block w-6 h-0.5 bg-gray-800 rounded"></span>
         <span className="block w-6 h-0.5 bg-gray-800 rounded"></span>
      </div>)}


      {isOpen && (
         <div ref={menuRef} >
            <div onClick={() => setIsOpen(false)} className="relative w-8 h-8 flex items-center justify-center cursor-pointer">
               <span className="absolute block w-6 h-0.5 bg-gray-800 rotate-45 rounded"></span>
               <span className="absolute block w-6 h-0.5 bg-gray-800 -rotate-45 rounded"></span>
            </div>

            <BurgerLink item={['Home',
               'Locations',
               'Private Events',
               'Catering',
               'Your Cart',
               'Login / Registration']} />
            <h3>Subscribe to Newsletter</h3>
            <div>
               <Input placeholder='Subscribe to Newsletter' />
               <Button img={send} />
            </div>
            <p>By providing your email address, you agree to receive marketing information and offers via email. You can unsubscribe at any time using the unsubscribe link.</p>
            <div>
               <Button img={insatgramIcon} />
               <Button img={tiktok} />
               <Button img={linkedinIcon} />
               <Button img={tweetIcon} />
            </div>
         </div>
      )}
   </>
   );
}