import react, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../context/productContext";
import category from '../files/category.json';
import Aside from '../components/aside.jsx';
import { AppContext } from "../context/appContext.jsx";
import Button from "../components/button.jsx";
import cross from '../assets/svgicons/cross-black.svg'
import ProductCardMenu from "../components/product-card-menu.jsx";
import ProductCardPopup from "../components/product-card-popup.jsx";
export default function Menu() {
   let { products } = useContext(ProductsContext);
   let [activeItem, setActiveItem] = useState(false)
   let { water, beer, soda, juice, freshJuice, wine, desserts, moonBistro, sideDish, sideSalad, hotDish, noodles, tartar, soup, salad, sauces, maki, sashimi, summerMenu, californiaRolls, sushiBoxes, nigiri, signatureRolls, } = useContext(AppContext)
   const { id } = useParams()
   const selectedItem = products.find((i) => i.id === id)
   useEffect(() => {
      if (selectedItem) {
         setActiveItem(true);
      }
   }, [selectedItem]);

   return (<>
      <div className=" relative max-w-7xl mx-auto px-4 py-8">
         <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
               <Aside category={category} />
            </div>

            <div className="lg:w-3/4">
               <section className="space-y-16">

                  <div ref={summerMenu}>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Summer Menu</h2>
                     <ProductCardMenu products={products.filter((i) => i.category == 'summer-menu')} />
                  </div>
                  <div ref={sushiBoxes}>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Sushi Boxes</h2>
                     <ProductCardMenu products={products.filter((i) => i.category == 'sushiBox')} />
                  </div>

                  <div ref={signatureRolls}>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Signature Rolls</h2>
                     <ProductCardMenu products={products.filter((i) => i.category == 'signature-rolls')} />
                  </div>

                  <div ref={nigiri}>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Nigiri</h2>
                     <ProductCardMenu products={products.filter((i) => i.category == 'nigiri')} />
                  </div>

                  <div ref={californiaRolls}>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">California Rolls</h2>
                     <ProductCardMenu products={products.filter((i) => i.category == 'california-rolls')} />
                  </div>

                  <div ref={maki}>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Maki</h2>
                     <ProductCardMenu products={products.filter((i) => i.category == 'maki')} />
                  </div>

                  <div ref={sashimi}>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Sashimi</h2>
                     <ProductCardMenu products={products.filter((i) => i.category == 'sashimi')} />
                  </div>

                  <div ref={tartar}>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Tartare</h2>
                     <ProductCardMenu products={products.filter((i) => i.category == 'tartar')} />
                  </div>

                  <div ref={sauces}>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Sauces & Extras</h2>
                     <ProductCardMenu products={products.filter((i) => i.category == 'sauces')} />
                  </div>

                  <div ref={salad}>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Salad</h2>
                     <ProductCardMenu products={products.filter((i) => i.category == 'salad')} />
                  </div>

                  <div ref={soup} >
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Soup</h2>
                     <ProductCardMenu products={products.filter((i) => i.category == 'soup')} />
                  </div>

                  <div ref={noodles}>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Noodles</h2>
                     <ProductCardMenu products={products.filter((i) => i.category == 'noodles')} />
                  </div>

                  <div ref={hotDish}>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Hot Dish</h2>
                     <ProductCardMenu products={products.filter((i) => i.category == 'hotDishes')} />
                  </div>

                  <div ref={sideSalad}>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Salad Garnish</h2>
                     <ProductCardMenu products={products.filter((i) => i.category == 'saladSideDish')} />
                  </div>

                  <div ref={sideDish}>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Side Dish</h2>
                     <ProductCardMenu products={products.filter((i) => i.category == 'sideDish')} />
                  </div>

                  <div ref={moonBistro}>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Bistro</h2>
                     <ProductCardMenu products={products.filter((i) => i.category == 'starters')} />
                  </div>

                  <div ref={desserts}>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Desserts</h2>
                     <ProductCardMenu products={products.filter((i) => i.category == 'desserts')} />
                  </div>

                  <div ref={water}>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Water</h2>
                     <ProductCardMenu products={products.filter((i) => i.category == 'water')} />
                  </div>

                  <div ref={soda}>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Soda</h2>
                     <ProductCardMenu products={products.filter((i) => i.category == 'softDrinks')} />
                  </div>

                  <div ref={juice}>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Juice</h2>
                     <ProductCardMenu products={products.filter((i) => i.category == 'juice')} />
                  </div>

                  <div ref={freshJuice}>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Freshly Squeezed Juice</h2>
                     <ProductCardMenu products={products.filter((i) => i.category == 'freshJuice')} />
                  </div>

                  <div ref={beer}>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Beer</h2>
                     <ProductCardMenu products={products.filter((i) => i.category == 'beer')} />
                  </div>

                  <div ref={wine}>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Wine</h2>
                     <ProductCardMenu products={products.filter((i) => i.category == 'wine')} />
                  </div>

                  {activeItem && (
                     <div className="fixed top-[5%] inset-0 flex justify-center items-center z-20 bg-black/30 " >
                        <div className="relative w-[90%] max-w-[90%] bg-white  rounded-xl border border-black ">
                           <Button
                              img={cross}
                              onClick={() => setActiveItem(false)}
                              className="absolute top-2 right-2 p-4 z-30"
                           />
                           <ProductCardPopup products={[selectedItem]} />
                        </div>
                     </div>
                  )}

               </section>
            </div>
         </div>
      </div>
   </>)
}