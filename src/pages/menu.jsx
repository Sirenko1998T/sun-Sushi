import react, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductsContext } from "../context/productContext";
import ProductCard from "../components/product-card";
import category from '../files/category.json';
import Aside from '../components/aside.jsx';

export default function Menu() {
   let { products } = useContext(ProductsContext);

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
                  <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Summer Menu</h2>

                  <div>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Sushi Boxes</h2>
                     <ProductCard products={products.filter((i) => i.category == 'sushi-boxes')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
                  </div>

                  <div>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Signature Rolls</h2>
                     <ProductCard products={products.filter((i) => i.category == 'signature-rolls')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
                  </div>

                  <div>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Nigiri</h2>
                     <ProductCard products={products.filter((i) => i.category == 'nigiri')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
                  </div>

                  <div>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">California Rolls</h2>
                     <ProductCard products={products.filter((i) => i.category == 'california-rolls')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
                  </div>

                  <div>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Maki</h2>
                     <ProductCard products={products.filter((i) => i.category == 'maki')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
                  </div>

                  <div>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Sashimi</h2>
                     <ProductCard products={products.filter((i) => i.category == 'sashimi')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
                  </div>

                  <div>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Tartare</h2>
                     <ProductCard products={products.filter((i) => i.category == 'tartare')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
                  </div>

                  <div>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Sauces & Extras</h2>
                     <ProductCard products={products.filter((i) => i.category == 'sauces-extras')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
                  </div>

                  <div>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Salad</h2>
                     <ProductCard products={products.filter((i) => i.category == 'salad')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
                  </div>

                  <div>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Soup</h2>
                     <ProductCard products={products.filter((i) => i.category == 'soup')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
                  </div>

                  <div>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Noodles</h2>
                     <ProductCard products={products.filter((i) => i.category == 'noodles')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
                  </div>

                  <div>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Hot Dish</h2>
                     <ProductCard products={products.filter((i) => i.category == 'hot-dish')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
                  </div>

                  <div>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Salad Garnish</h2>
                     <ProductCard products={products.filter((i) => i.category == 'salad-garnish')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
                  </div>

                  <div>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Side Dish</h2>
                     <ProductCard products={products.filter((i) => i.category == 'side-dish')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
                  </div>

                  <div>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Bistro</h2>
                     <ProductCard products={products.filter((i) => i.category == 'bistro')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
                  </div>

                  <div>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Desserts</h2>
                     <ProductCard products={products.filter((i) => i.category == 'desserts')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
                  </div>

                  <div>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Water</h2>
                     <ProductCard products={products.filter((i) => i.category == 'water')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
                  </div>

                  <div>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Soda</h2>
                     <ProductCard products={products.filter((i) => i.category == 'soda')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
                  </div>

                  <div>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Juice</h2>
                     <ProductCard products={products.filter((i) => i.category == 'juice')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
                  </div>

                  <div>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Freshly Squeezed Juice</h2>
                     <ProductCard products={products.filter((i) => i.category == 'freshly-squeezed-juice')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
                  </div>

                  <div>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Beer</h2>
                     <ProductCard products={products.filter((i) => i.category == 'beer')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
                  </div>

                  <div>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Wine</h2>
                     <ProductCard products={products.filter((i) => i.category == 'wine')} homePage={false} menuPage={true} detaledView={false} cardSlider={false} />
                  </div>

                  {selectedItem && (
                     <div className="mt-12">
                        <ProductCard products={[selectedItem]} homePage={false} menuPage={false} detaledView={true} cardSlider={false} />
                     </div>
                  )}
               </section>
            </div>
         </div>
      </div>
   </>)
}