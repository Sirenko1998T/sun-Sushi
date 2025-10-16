import react, { useContext, useEffect } from "react"
import Header from "../components/header";
import Slider from "../components/slider";
import { ProductsContext } from "../context/productContext";
import sliderImg1 from '../assets/img/sliider/hero_02_eng_srb.webp';
import sliderImg2 from '../assets/img/sliider/unnamed.png';
import sliderImg3 from '../assets/img/sliider/unnamed (1).png';
import leftArrow from '..//assets/svgicons/arrow-left-long.svg';
import rightArrow from '..//assets/svgicons/arrow-right-long.svg'
let slidersImg = [sliderImg1, sliderImg2, sliderImg3];
import Aside from "../components/aside";
import category from '../files/category.json'
export default function Home() {
   let { products, loading, fetchProducts } = useContext(ProductsContext);



   useEffect(() => {
      fetchAllProducts();
   }, []);

   if (loading) return <div>Loading...</div>;

   return (
      <div>
         {products.map(product => (
            <div key={product.id}>
               <h3>{product.name}</h3>
               <p>${product.price}</p>
            </div>
         ))}
      </div>
   );
}