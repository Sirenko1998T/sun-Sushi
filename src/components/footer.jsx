import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import Button from "./button";
import Input from "./input";
import logoFooter from '../assets/img/logo.png';
import insatgramIcon from '../assets/svgicons/insta.svg';
import tiktok from '../assets/svgicons/tiktok.svg';
import linkedinIcon from '../assets/svgicons/linkedin.svg';
import { AppContext } from '../context/appContext';
import tweetIcon from '../assets/svgicons/tweet.svg';
import send from '../assets/svgicons/paper-plane-white.svg';
import TermsOfUse from './termsOfUse';
import cross from '../assets/svgicons/cross-black.svg';
import PrivacyPolicy from './privacyPolicy';


export default function Footer() {
   const { email, setEmail, sendEmail, setSendEmail, sendEmailSuccs, setTermsOfUse } = useContext(AppContext);
   const [openTermsOfUse, setOpenTermsOfUse] = useState(false);
   const [openPrivacyPolicy, setOpenPrivacyPolicy] = useState(false);

   return (
      <footer className="bg-black text-white pt-12">
         <div className="container mx-auto px-4 lg:px-8">


            <div className="flex justify-center mb-10">
               <img src={logoFooter} alt="Moon Sushi Bar Logo" className="h-22 w-auto" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">

               <div className="space-y-3">
                  <h2 className="text-lg font-semibold border-b border-gray-700 pb-2 mb-3">Navigation</h2>
                  <ul className="space-y-2">
                     <li><Link to='/' className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
                     <li><Link to='/menu' className="text-gray-300 hover:text-white transition-colors">Menu</Link></li>
                     <li><a href='mailto:sirenko23t@gmail.com' className="text-gray-300 hover:text-white transition-colors">Join Our Team</a></li>
                     <li><Link to='/login' className="text-gray-300 hover:text-white transition-colors">Login / Registration</Link></li>
                  </ul>
               </div>


               <div className="space-y-3">
                  <h2 className="text-lg font-semibold border-b border-gray-700 pb-2 mb-3">Follow us</h2>
                  <div className="flex space-x-3">
                     <Button
                        img={tiktok}
                        className="bg-black hover:bg-gray-600 p-2 rounded-lg transition-colors"
                        onClick={() => window.open('https://www.tiktok.com/en/', '_blank')}
                     />
                     <Button
                        img={linkedinIcon}
                        className="bg-black hover:bg-gray-600 p-2 rounded-lg transition-colors"
                        onClick={() => window.open('https://ua.linkedin.com/', '_blank')}
                     />
                     <Button
                        img={insatgramIcon}
                        className="bg-black hover:bg-gray-600 p-2 rounded-lg transition-colors"
                        onClick={() => window.open('https://www.instagram.com/', '_blank')}
                     />
                     <Button
                        img={tweetIcon}
                        className="bg-black hover:bg-gray-600 p-2 rounded-lg transition-colors"
                        onClick={() => window.open('https://x.com/', '_blank')}
                     />
                  </div>
               </div>


               <div className="space-y-3">
                  <h2 className="text-lg font-semibold border-b border-gray-700 pb-2 mb-3">Subscribe to Newsletter</h2>
                  <div className="flex flex-col sm:flex-row gap-2">
                     {sendEmail ? (
                        <p className="text-white">You subscribed successfully!</p>
                     ) : (
                        <>
                           <Input
                              placeholder="Enter your email"
                              type="email"
                              className="flex-1 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-500 rounded-md px-3 py-2"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                           />
                           <Button
                              img={send}
                              className=" hover:bg-gray-500 p-2 rounded-md transition-colors"
                              onClick={() => {
                                 setSendEmail(true);
                                 sendEmailSuccs();
                              }}
                           />
                        </>
                     )}
                  </div>
               </div>

            </div>

            <div className="border-t border-gray-700 pt-6 text-center space-y-2">
               <p className="text-gray-400 text-sm">
                  Sun sushi bar ® — 2025 © All rights reserved<br />
                  Designed by Arty © — All rights reserved
               </p>

               <div className="flex justify-center flex-wrap gap-4 text-sm">
                  {openTermsOfUse && (
                     <div className="absolute inset-0 bg-black/70 flex justify-center items-center p-6">
                        <div className="bg-white rounded-lg p-6 relative max-w-lg w-full">

                           <TermsOfUse onClick={() => setOpenTermsOfUse(false)} />
                        </div>
                     </div>
                  )}
                  <Button
                     label="Terms of Use"
                     className="text-gray-400 hover:text-white bg-transparent underline transition-colors"
                     onClick={() => setOpenTermsOfUse(true)}
                  />

                  {openPrivacyPolicy && (
                     <div className="absolute inset-0 bg-black/70 flex justify-center items-center p-6">
                        <div className="bg-white rounded-lg p-6 relative max-w-lg w-full">

                           <PrivacyPolicy onClick={() => setOpenPrivacyPolicy(false)} />
                        </div>
                     </div>
                  )}
                  <Button
                     label="Privacy Policy"
                     className="text-gray-400 hover:text-white bg-transparent underline transition-colors"
                     onClick={() => setOpenPrivacyPolicy(true)}
                  />
               </div>
            </div>

         </div>
      </footer>
   );
}
