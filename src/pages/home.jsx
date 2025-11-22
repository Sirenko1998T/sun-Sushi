import react, { useContext, useState } from "react"
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
import ProductCardSlider1 from "../components/product-card-slider1";
import ProductCardSlider2 from "../components/product-card-slider2";
import AboutUsBlock from "../components/about-us-block";
import category from '../files/category.json'
import { ProductsContext } from "../context/productContext";

import InfoBlock from "../components/info-block";
import Button from "../components/button";

export default function Home() {
   const navigate = useNavigate();
   let { products, loading } = useContext(ProductsContext);
   let [loyalityProg, setLoyalityProg] = useState(false);
   let selection1 = ['Moon Bistro Edamame', 'Spicy Eel Maki', 'Spring Truffle Roll', 'Warm Beef Spring Rolls', 'Shrimp Box'];
   let selection2 = ['Salmon Tartar', 'Green Velvet Curry Soup', 'Crispy Vegetable California', 'Salmon and Quinoa Salad', 'Salmon Nigiri'];

   let select1 = products.filter(product => selection1.includes(product.name));
   let select2 = products.filter(product => selection2.includes(product.name));
   let selectSlide1 = select1.map(product => (
      <ProductCardSlider1
         key={product.id}
         products={[product]}


      />
   ));

   let selectSlide2 = select2.map(product => (
      <ProductCardSlider2
         key={product.id}
         products={[product]}

      />
   ));





   return (<>
      <div className="space-y-16 ">
         <section className="relative">


            <Slider slides={slidersImg} rightBtn={leftArrow} leftBtn={rightArrow} componentArr={false} imgArr={true} />
            <div className="absolute left-1/2 top-[80%] -translate-x-1/2 -translate-y-1/2 text-center bg-white/50 p-6 rounded-lg w-2/4">
               <Link to='/menu'>  <Button
                  label="Order now"
                  className="bg-black text-white hover:bg-gray-900 hover:scale-105 rounded-full shadow-xl px-15 py-3 text-xl font-bold transition-all duration-300"
               />
               </Link>
               <p className="text-black font-bold uppercase text-lg">
                  Delivery hours 11:00-22:45
               </p>

            </div>
         </section>



         <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
            <InfoBlock img={svg1} desc='Handmade with fresh ingredients' />
            <InfoBlock img={svg2} desc='Delivery everyday from 11:00-22:45 Hours' />
            <InfoBlock img={svg3} desc='Payment by card or cash on delivery' />
            <InfoBlock img={svg4} desc='Customer service everyday for you' />
         </section>

         <InfoBlock img={svg5} title='OR CALL US? +381.11.3344.569' className="text-center bg-gray-50 py-8" />

         <section className="px-4 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Discover our selection</h2>
            <Slider slides={selectSlide1} rightBtn={leftArrow} leftBtn={rightArrow} componentArr={true} imgArr={false} />
         </section>

         <section className="px-4 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Hard to choose<br />Take our best creations</h2>
            <Slider slides={selectSlide2} rightBtn={leftArrow} leftBtn={rightArrow} componentArr={true} imgArr={false} />
         </section>

         <section className="relative w-full h-screen bg-gray-50">
            <img
               src={loyalityImg}
               alt="loyalty program"
               className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="relative z-10 w-full h-full flex items-center justify-center px-4 text-center lg:text-left">
               {loyalityProg ? (
                  <div className="max-w-2xl bg-white/60 p-6 rounded-xl shadow-lg text-center">
                     <h2 className="text-4xl font-bold mb-4">The Sun Lovers</h2>
                     <p className="text-gray-700 mb-6">
                        <span className="font-bold" >SUN Loyalty Program</span> <br />
                        Join the SUN Loyalty Program!<br />
                        Hey there, you! Yes, you, the one who orders from SUN every time you’re hungry, don’t feel like cooking, have a craving for sushi, or just love the cuisine of the Sun. We want to thank you!<br /><br />
                        <span className="font-bold" >Here's the deal</span><br />
                        For every 5 orders you place with us, we’ll give you a stellar 10% discount on your next order! It’s our little way of saying thanks for being such an amazing customer. Ready to get started? Place your order now and let the rewards begin!<br /><br />
                        Non cumulative offer. Best promotion will be applied.
                     </p>
                     <Link to='/menu'>
                        <Button
                           label='Make your first order'
                           className="bg-black  hover:bg-black  text-white px-6 py-3 rounded-full font-semibold"
                        />
                     </Link>
                  </div>
               ) : (
                  <div className="max-w-xl   p-6 rounded-xl  text-center">
                     <p className="text-gray-600 mb-2">Join our</p>
                     <h2 className="text-5xl font-bold text-gray-800 mb-4">Loyalty Program</h2>
                     <Button
                        label='FIND OUT MORE'
                        onClick={() => setLoyalityProg(!loyalityProg)}
                        className="bg-black   text-white px-13 py-3 rounded-full font-bold"
                     />
                  </div>
               )}
            </div>
         </section>



         <section className="w-full min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
               <AboutUsBlock
                  img={aboutImg1}
                  title='Private Event'
                  subtitle='Do you want to organize'
                  buttonComponent={
                     <Button
                        label='Contact Us'
                        onClick={() => window.location.href = 'mailto:sirenko23t@gmail.com'}
                        className="bg-black   text-white px-13 py-3 rounded-full font-bold"
                     />
                  }
                  hoverSubTitle='Welcome to Sun'
                  hoverTitle='Private Event'
                  hoverdesc='Moon can host private parties in one of our restaurant halls. We offer to organize a celebration that reflects the spirit of our restaurant — festive and friendly. You imagine it, and we bring it to life. Our personalized approach ensures that your event will be exactly as you envision it.'
               />

               <AboutUsBlock
                  img={aboutImg2}
                  title='Catering'
                  subtitle='Do you want to organize'
                  list={['Gourmet cuisine', 'Customized menus', 'Professional service']}
                  buttonComponent={
                     <Button
                        label='Contact Us'
                        onClick={() => window.location.href = 'mailto:sirenko23t@gmail.com'}
                        className="bg-black   text-white px-13 py-3 rounded-full font-bold"
                     />
                  }
                  hoverSubTitle='Welcome to Sun'
                  hoverTitle='Catering'
                  hoverdesc='We offer personalized service. Every request takes our guests wishes into account. From simple dish preparation to full-service catering, each guest chooses their own formula and can rely on the professionalism of the MOON team, who will make their order unforgettable.'
               />
            </div>
         </section>
      </div>
   </>
   );
}