import react, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductsContext } from "../context/productContext";
import ProductCard from "../components/product-card";
import category from '../files/category.json';
import Aside from '../components/aside.jsx';
import { AppContext } from "../context/appContext.jsx";
import Button from "../components/button.jsx";
import cross from '../assets/svgicons/cross-black.svg'
export default function Menu() {
   let { products } = useContext(ProductsContext);
   let [activeItem, setActiveItem] = useState(true)
   let { water, beer, soda, juice, freshJuice, wine, desserts, moonBistro, sideDish, sideSalad, hotDish, noodles, tartar, soup, salad, sauces, maki, sashimi, summerMenu, californiaRolls, sushiBoxes, nigiri, signatureRolls, } = useContext(AppContext)
   const { id } = useParams()
   const selectedItem = products.find((i) => i.id === id)

   return (<>
      <div className="max-w-7xl mx-auto px-4 py-8">
         <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
               <Aside category={category} />
            </div>

            <div className="lg:w-3/4">
               <section className="space-y-16">

                  <div ref={summerMenu}>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Summer Menu</h2>
                     <ProductCard products={products.filter((i) => i.category == 'summer-menu')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
                  </div>
                  <div ref={sushiBoxes}>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Sushi Boxes</h2>
                     <ProductCard products={products.filter((i) => i.category == 'sushiBox')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
                  </div>

                  <div ref={signatureRolls}>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Signature Rolls</h2>
                     <ProductCard products={products.filter((i) => i.category == 'signature-rolls')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
                  </div>

                  <div ref={nigiri}>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Nigiri</h2>
                     <ProductCard products={products.filter((i) => i.category == 'nigiri')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
                  </div>

                  <div ref={californiaRolls}>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">California Rolls</h2>
                     <ProductCard products={products.filter((i) => i.category == 'california-rolls')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
                  </div>

                  <div ref={maki}>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Maki</h2>
                     <ProductCard products={products.filter((i) => i.category == 'maki')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
                  </div>

                  <div ref={sashimi}>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Sashimi</h2>
                     <ProductCard products={products.filter((i) => i.category == 'sashimi')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
                  </div>

                  <div ref={tartar}>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Tartare</h2>
                     <ProductCard products={products.filter((i) => i.category == 'tartar')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
                  </div>

                  <div ref={sauces}>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Sauces & Extras</h2>
                     <ProductCard products={products.filter((i) => i.category == 'sauces')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
                  </div>

                  <div ref={salad}>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Salad</h2>
                     <ProductCard products={products.filter((i) => i.category == 'salad')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
                  </div>

                  <div ref={soup} >
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Soup</h2>
                     <ProductCard products={products.filter((i) => i.category == 'soup')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
                  </div>

                  <div ref={noodles}>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Noodles</h2>
                     <ProductCard products={products.filter((i) => i.category == 'noodles')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
                  </div>

                  <div ref={hotDish}>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Hot Dish</h2>
                     <ProductCard products={products.filter((i) => i.category == 'hotDishes')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
                  </div>

                  <div ref={sideSalad}>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Salad Garnish</h2>
                     <ProductCard products={products.filter((i) => i.category == 'saladSideDish')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
                  </div>

                  <div ref={sideDish}>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Side Dish</h2>
                     <ProductCard products={products.filter((i) => i.category == 'sideDish')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
                  </div>

                  <div ref={moonBistro}>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Bistro</h2>
                     <ProductCard products={products.filter((i) => i.category == 'starters')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
                  </div>

                  <div ref={desserts}>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Desserts</h2>
                     <ProductCard products={products.filter((i) => i.category == 'desserts')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
                  </div>

                  <div ref={water}>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Water</h2>
                     <ProductCard products={products.filter((i) => i.category == 'water')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
                  </div>

                  <div ref={soda}>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Soda</h2>
                     <ProductCard products={products.filter((i) => i.category == 'softDrinks')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
                  </div>

                  <div ref={juice}>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Juice</h2>
                     <ProductCard products={products.filter((i) => i.category == 'juice')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
                  </div>

                  <div ref={freshJuice}>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Freshly Squeezed Juice</h2>
                     <ProductCard products={products.filter((i) => i.category == 'freshJuice')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
                  </div>

                  <div ref={beer}>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Beer</h2>
                     <ProductCard products={products.filter((i) => i.category == 'beer')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
                  </div>

                  <div ref={wine}>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Wine</h2>
                     <ProductCard products={products.filter((i) => i.category == 'wine')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
                  </div>

                  {activeItem && (
                     <div className="mt-12">
                        <Button img={cross} onClick={() => setActiveItem(false)} />
                        <ProductCard products={[selectedItem]} homePage={false} menuPage={false} detaledView={true} cardSlider={false} />
                     </div>
                  )}
               </section>
            </div>
         </div>
      </div>
   </>)
}