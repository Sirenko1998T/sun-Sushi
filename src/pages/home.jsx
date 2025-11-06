import react, { useContext, useEffect } from "react"
import { Link, useNavigate } from 'react-router-dom';

import Slider from "../components/slider";
import svg1 from '../assets/svgicons/hero1.svg';
import svg2 from '../assets/svgicons//hero2.svg';
import svg3 from '../assets/svgicons/hero3.svg';
import svg4 from '../assets/svgicons/hero4.svg';
import svg5 from '../assets/svgicons/phone-rotary.svg';
import sliderImg1 from '../assets/img/sliider/hero_02_eng_srb.webp';
import sliderImg2 from '../assets/img/sliider/unnamed.png';
import sliderImg3 from '../assets/img/sliider/unnamed (1).png';
let slidersImg = [sliderImg1, sliderImg2, sliderImg3];
import leftArrow from '..//assets/svgicons/arrow-left-long.svg';
import rightArrow from '..//assets/svgicons/arrow-right-long.svg'
import loyalityImg from '../assets/img/loyalty program.jpg'
import restaurants1 from '../assets/img//moon_makedonska.webp'
import bookOpen from '../assets/svgicons/book-open.svg'
import restaurants2 from '../assets/img/moon_nbg.webp'
import aboutImg1 from '../assets/img/aboutus1.jpg'
import aboutImg2 from '../assets/img/aboutus2.jpg'

import AboutUsBlock from "../components/about-us-block";
import category from '../files/category.json'
import { ProductsContext } from "../context/productContext";

import InfoBlock from "../components/info-block";
import ProductCard from "../components/product-card";
import Button from "../components/button";

export default function Home() {
   const navigate = useNavigate();
   let { products, loading } = useContext(ProductsContext);
   let selection1 = ['Moon Bistro Edamame', 'Spicy Eel Maki', 'Spring Truffle Roll', 'Warm Beef Spring Rolls', 'Shrimp Box'];
   let selection2 = ['Salmon Tartar', 'Green Velvet Curry Soup', 'Crispy Vegetable California', 'Salmon and Quinoa Salad', 'Salmon Nigiri'];

   let select1 = products.filter(product => selection1.includes(product.name));
   let select2 = products.filter(product => selection2.includes(product.name));
   let selectSlide1 = products.map((i) => (<ProductCard products={select1} homePage={true} menuPage={false} detaledView={false} cardSlider={false} />))
   let selectSlide2 = products.map((i) => (<ProductCard products={select2} homePage={false} menuPage={false} detaledView={false} cardSlider={true} />))





   return (<>

      <Slider slides={slidersImg} rightBtn={leftArrow} leftBtn={rightArrow} componentArr={false} imgArr={true} />
      <div>
         <Button label='Order now' />
         <p>Delivery hours 11:00-22:45</p>
      </div>

      <section>
         <InfoBlock img={svg1} desc='Handmade with fresh ingredients' />
         <InfoBlock img={svg2} desc='Delivery everyday from 11:00-22:45 Hours' />
         <InfoBlock img={svg3} desc='Payment by card or cash on delivery' />
         <InfoBlock img={svg4} desc='Customer service everyday for you' />
      </section>
      <InfoBlock img={svg5} title='OR CALL US? +381.11.3344.569' />
      <h2>Discover our selection</h2>
      <Slider slides={selectSlide1} rightBtn={leftArrow} leftBtn={rightArrow} componentArr={true} imgArr={false} />
      <h2>Hard to choose
         Take our best creations
      </h2>
      <Slider slides={selectSlide2} rightBtn={leftArrow} leftBtn={rightArrow} componentArr={true} imgArr={false} />
      <section>
         <img src={loyalityImg} alt="loyality program" />
         <p>Join our </p>
         <h2>Loyalty Program</h2>
         <Button label=' Learn more' />
      </section>
      <section>
         <h2>Our Restaurants</h2>
         <div>         <InfoBlock img={restaurants1} title='Prague' desc='Located in the heart of Prague, our restaurant offers a one-of-a-kind dining experience across three elegant floors and a cozy garden terrace. With its warm, inviting atmosphere, it’s the perfect spot to unwind and share great moments with family and friends. Discover our refined menu featuring creative sushi rolls made with fresh, high-quality ingredients, and signature cocktails prepared by our talented bartenders. Whether you’re passionate about Asian cuisine or simply seeking a friendly place to relax, our restaurant will charm you with unforgettable flavors and ambiance.' />
            <Button img={bookOpen} /> <Button label='Reserve a Table' /> <p>Or call us: <a href="#">+125.11.334.4569</a> </p>  </div>
         <div> <InfoBlock img={restaurants2} title='Lisbon' desc='Situated in the lively district of New Town, Moon Lisbon welcomes you with a modern interior and a serene terrace surrounded by greenery. It’s an ideal place to gather with friends or family, enjoy exquisite sushi, and sip refreshing cocktails in a cheerful, laid-back setting. A culinary experience you simply can’t miss!' /></div>
         <Button img={bookOpen} /> <Button label='Reserve a Table' /> <p>Or call us: <a href="#">+128.11.77.0500</a> </p> </section>
      <section>
         <AboutUsBlock img={aboutImg1} title='Private Event' subtitle='Do you want to organize' buttonComponent={<Button label='Contact Us' />} hoverSubTitle='Welcome to Sun' hoverTitle='Private Event' hoverdesc='Moon can host private parties in one of our restaurant halls. We offer to organize a celebration that reflects the spirit of our restaurant — festive and friendly. You imagine it, and we bring it to life. Our personalized approach ensures that your event will be exactly as you envision it.' />
         <AboutUsBlock img={aboutImg2} title='Catering' subtitle='Do you want to organize' list={['Gourmet cuisine', 'Customized menus', 'Professional service']} buttonComponent={<Button label='Contact Us' />} hoverSubTitle='Welcome to Sun' hoverTitle='Catering' hoverdesc='We offer personalized service. Every request takes our guests’ wishes into account. From simple dish preparation to full-service catering, each guest chooses their own formula and can rely on the professionalism of the MOON team, who will make their order unforgettable.' />

      </section>

   </>


   );
}    