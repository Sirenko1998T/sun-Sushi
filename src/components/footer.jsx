import LocationBlock from "./location-block"
import Button from "./button";
import logoFooter from '../assets/img//logo.png';
import insatgramIcon from '../assets/svgicons/insta.svg'
import tiktok from '../assets/svgicons/tiktok.svg'
import linkedinIcon from '../assets/svgicons/linkedin.svg'

import tweetIcon from '../assets/svgicons/tweet.svg'
import send from '../assets/svgicons/paper-plane-white.svg'
export default function Footer({ }) {
   return (
      <footer className="bg-gray-900 text-white">
         <div className="container mx-auto px-4 py-12">
            <div className="flex justify-center mb-8">
               <img src={logoFooter} alt="logo" className="h-12 w-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
               <div className="space-y-6">
                  <LocationBlock title='Prague' desc={['10000', 'info@sun-sushi.com ', '+125.11.334.4569']} button={<Button label='reserve a table' />} />
                  <LocationBlock title='Lisbon' desc={['15000', 'info@sun-sushi.com', '+128.11.77.0500']} button={<Button label='reserve a table' />} />
               </div>

               <div className="space-y-4">
                  <h2 className="text-lg font-semibold mb-4">Navigation</h2>
                  <h2 className="text-gray-300 hover:text-white cursor-pointer transition-colors">Home</h2>
                  <h2 className="text-gray-300 hover:text-white cursor-pointer transition-colors">Menu</h2>
                  <h2 className="text-gray-300 hover:text-white cursor-pointer transition-colors">Cooperation</h2>
                  <h2 className="text-gray-300 hover:text-white cursor-pointer transition-colors">Join Our Team</h2>
                  <h2 className="text-gray-300 hover:text-white cursor-pointer transition-colors">Contacts</h2>
                  <h2 className="text-gray-300 hover:text-white cursor-pointer transition-colors">Login / Registration</h2>
               </div>

               <div className="space-y-4">
                  <h2 className="text-lg font-semibold mb-4">Follow us:</h2>
                  <div className="flex space-x-3">
                     <Button img={tiktok} className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition-colors" />
                     <Button img={linkedinIcon} className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition-colors" />
                     <Button img={insatgramIcon} className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition-colors" />
                     <Button img={tweetIcon} className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition-colors" />
                  </div>
               </div>

               <div className="space-y-4">
                  <h2 className="text-lg font-semibold mb-4">Newsletter</h2>
                  <div className="flex space-x-2">
                     <input
                        type="text"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                     />
                     <Button img={send} className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors" />
                  </div>
               </div>
            </div>

            <div className="border-t border-gray-700 pt-8">
               <p className="text-gray-400 text-center mb-4">
                  Moon sushi bar ® — 2025 © All rights reserved<br />
                  Designed by Arty © — All rights reserved<br />
                  Moon sushi bar ® —
               </p>
               <div className="flex justify-center space-x-4">
                  <Button label='Terms of Use/' className="text-gray-400 hover:text-white bg-transparent underline transition-colors" />
                  <Button label=' Privacy Policy ' className="text-gray-400 hover:text-white bg-transparent underline transition-colors" />
               </div>
            </div>
         </div>
      </footer>
   )
}