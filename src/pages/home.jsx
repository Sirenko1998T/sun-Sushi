import react, { useContext, useEffect } from "react"
import Header from "../components/header";
import Slider from "../components/slider";

import sliderImg1 from '../assets/img/sliider/hero_02_eng_srb.webp';
import sliderImg2 from '../assets/img/sliider/unnamed.png';
import sliderImg3 from '../assets/img/sliider/unnamed (1).png';
let slidersImg = [sliderImg1, sliderImg2, sliderImg3];
import leftArrow from '..//assets/svgicons/arrow-left-long.svg';
import rightArrow from '..//assets/svgicons/arrow-right-long.svg'

import Aside from "../components/aside";
import category from '../files/category.json'
import { ProductsContext } from "../context/productContext";
import InfoBlack from "../components/info-black";
import ProductCard from "../components/product-card";
export default function Home() {
   let { products } = useContext(ProductsContext);
   let selection1 = ['Moon Bistro Edamame', 'Spicy Eel Maki', 'Spring Truffle Roll', 'Warm Beef Spring Rolls', 'Shrimp Box'];
   let selection2 = ['Salmon Tartar', 'Green Velvet Curry Soup', 'Crispy Vegetable California', 'Salmon and Quinoa Salad', 'Salmon Nigiri'];

   let select1 = products.filter(product => selection1.includes(product.name));
   let select2 = products.filter(product => selection2.includes(product.name));
   let selectSlide1 = [<ProductCard products={select1} cardSlider={true} />]
   let selectSlide2 = [<ProductCard products={select2} cardSlider={true} />]





   return (<>




   </>


   );
}