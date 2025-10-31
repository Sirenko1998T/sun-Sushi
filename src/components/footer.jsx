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
      <footer>
         <div><img src={logoFooter} alt="logo" /></div>
         <div>
            <LocationBlock title='Prague' desc={['10000', 'info@sun-sushi.com ', '+125.11.334.4569']} button={<Button label='reserve a table' />} />
            <LocationBlock title='Lisbon' desc={['15000', 'info@sun-sushi.com', '+128.11.77.0500']} button={<Button label='reserve a table' />} />
            <div>
               <h2>Home</h2>
               <h2>Menu</h2>
               <h2>Cooperation</h2>
               <h2>Join Our Team</h2>
               <h2>Contacts</h2>
               <h2>Login / Registration</h2>

            </div>
            <div>
               <h2>Follow us:</h2>
               <div><Button img={tiktok} />
                  <Button img={linkedinIcon} />
                  <Button img={insatgramIcon} />
                  <Button img={tweetIcon} /></div>
            </div>
            <input type="text" placeholder="Follow us" /> <Button img={send} />
         </div>
         <p>
            Moon sushi bar ® — 2025 © All rights reserved
            Designed by Arty © — All rights reserved
            Moon sushi bar ® —  </p>
         <Button label='Terms of Use/ ' />
         <Button label=' Privacy Policy ' />
      </footer>
   )
}
