import react, { useContext, useState } from "react";
import { ProductsContext } from "../context/productContext";
import ProductCard from "../components/product-card";
import category from '../files/category.json';
import Aside from '../components/aside.jsx'
export default function Menu() {
   let { products } = useContext(ProductsContext);

   return (<>
      <Aside category={category} />
      <section>
         <h2>Summer Menu</h2>

         <ProductCard products={products.filter((i) => i.category == 'summer-menu')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
         <h2>Sushi Boxes</h2>
         <ProductCard products={products.filter((i) => i.category == 'sushi-boxes')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />

         <h2>Signature Rolls</h2>
         <ProductCard products={products.filter((i) => i.category == 'signature-rolls')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />

         <h2>Nigiri</h2>
         <ProductCard products={products.filter((i) => i.category == 'nigiri')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />

         <h2>California Rolls</h2>
         <ProductCard products={products.filter((i) => i.category == 'california-rolls')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />

         <h2>Maki</h2>
         <ProductCard products={products.filter((i) => i.category == 'maki')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />

         <h2>Sashimi</h2>
         <ProductCard products={products.filter((i) => i.category == 'sashimi')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />

         <h2>Tartare</h2>
         <ProductCard products={products.filter((i) => i.category == 'tartare')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />

         <h2>Sauces & Extras</h2>
         <ProductCard products={products.filter((i) => i.category == 'sauces-extras')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />

         <h2>Salad</h2>
         <ProductCard products={products.filter((i) => i.category == 'salad')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />

         <h2>Soup</h2>
         <ProductCard products={products.filter((i) => i.category == 'soup')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />

         <h2>Noodles</h2>
         <ProductCard products={products.filter((i) => i.category == 'noodles')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />

         <h2>Hot Dish</h2>
         <ProductCard products={products.filter((i) => i.category == 'hot-dish')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />

         <h2>Salad Garnish</h2>
         <ProductCard products={products.filter((i) => i.category == 'salad-garnish')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />

         <h2>Side Dish</h2>
         <ProductCard products={products.filter((i) => i.category == 'side-dish')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />

         <h2>Bistro</h2>
         <ProductCard products={products.filter((i) => i.category == 'bistro')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />

         <h2>Desserts</h2>
         <ProductCard products={products.filter((i) => i.category == 'desserts')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />

         <h2>Water</h2>
         <ProductCard products={products.filter((i) => i.category == 'water')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />

         <h2>Soda</h2>
         <ProductCard products={products.filter((i) => i.category == 'soda')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />

         <h2>Juice</h2>
         <ProductCard products={products.filter((i) => i.category == 'juice')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />

         <h2>Freshly Squeezed Juice</h2>
         <ProductCard products={products.filter((i) => i.category == 'freshly-squeezed-juice')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />

         <h2>Beer</h2>
         <ProductCard products={products.filter((i) => i.category == 'beer')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />

         <h2>Wine</h2>
         <ProductCard products={products.filter((i) => i.category == 'wine')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />


      </section>

   </>)
}