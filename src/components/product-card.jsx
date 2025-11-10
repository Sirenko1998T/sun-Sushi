import React, { useState, useContext } from "react";
import Button from "./button";
import Count from './count'
import { useNavigate } from 'react-router-dom';

import { CartContext } from "../context/cartContext";



export default function ProductCard({
   products = [],
   homePage = false,
   menuPage = false,
   detaledView = false,
   cardSlider = false,
}) {
   const [count, showCount] = useState([]);
   const [hovered, setHovered] = useState(null);
   let navigate = useNavigate();

   let { addToCart, cart, quantity, increaseQuantity, reduceQuantity } = useContext(CartContext);
   return (
      <div className={`grid gap-6 p-4 ${cardSlider ? "grid-flow-col auto-cols-max overflow-x-auto" :
            detaledView ? "grid-cols-1" :
               "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
         }`}>
         {products.map((product, index) => {
            let isItemInCart = quantity[product.id] > 0;

            return (
               <div
                  key={index}
                  className={`bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 ${cardSlider ? "w-64 flex-shrink-0" : "w-full"
                     }`}
               >
                  {homePage && (

                     <div className="p-4 text-center cursor-pointer" onClick={() => navigate(`/menu/${product.id}`)}>

                        <img
                           src={product.img}
                           alt={product.name}
                           className="w-full h-48 object-cover rounded-md mb-3"
                        />
                        <Button label="Add to cart" className="w-full mb-2" />
                        <p className="text-lg font-semibold mt-2">{product.name}</p>
                        <p className="text-gray-600">{product.price} RSD</p>
                        <p className="text-sm text-gray-500">Count: {product.count}</p>

                     </div>

                  )}

                  {cardSlider && (
                     <div className="p-4 text-center cursor-pointer" onClick={() => navigate(`/menu/${product.id}`)}>
                        <img
                           src={product.img}
                           alt={product.name}
                           className="w-full h-48 object-cover rounded-md mb-3"
                        />
                        <Button label="View our menu" className="w-full" />
                        <p className="text-gray-700 mt-2">{product.category}</p>
                     </div>
                  )}

                  {menuPage && (
                     <div className="relative p-4 cursor-pointer" onClick={() => navigate(`/menu/${product.id}`)}>
                        <div
                           onMouseEnter={() => setHovered(product.id)}
                           onMouseLeave={() => setHovered(null)}
                           className="relative"
                        >
                           <img
                              src={product.img}
                              alt={product.name}
                              className="w-full h-56 object-cover rounded-lg"
                           />
                           {hovered === product.id && (
                              <div className="absolute inset-0 bg-black bg-opacity-60 text-white flex flex-col justify-center items-center p-4 rounded-lg transition-opacity duration-300">
                                 <p className="text-lg font-semibold mb-1">
                                    {product.name}
                                 </p>
                                 <p className="text-sm mb-3 text-gray-200">
                                    {product.description}
                                 </p>

                                 {isItemInCart ? <Count value={quantity[product.id]} reduce={() => reduceQuantity(product.id)} increase={() => increaseQuantity(product.id)} /> : <Button onClick={() => {
                                    showCount(prev => [...prev, product.id]);
                                    addToCart(product.id, products);

                                 }} label="Add to cart" className="bg-white text-black hover:bg-gray-100" />}

                              </div>
                           )}
                        </div>
                        <div className="mt-3 text-center">
                           <p className="text-lg font-semibold">{product.name}</p>
                           <p className="text-gray-600">{product.price} RSD</p>
                           <p className="text-sm text-gray-500">
                              Count: {product.count}
                           </p>
                        </div>
                     </div>
                  )}

                  {detaledView && (
                     <div className="p-6 flex flex-col lg:flex-row gap-8">
                        <img
                           src={product.img}
                           alt={product.name}
                           className="w-full lg:w-1/2 h-64 lg:h-96 object-cover rounded-xl"
                        />
                        <div className="flex flex-col justify-center w-full lg:w-1/2">
                           <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
                           <p className="text-xl text-gray-700 mb-4">{product.description}</p>
                           <p className="text-2xl font-bold text-gray-800 mb-2">{product.price} RSD</p>
                           <p className="text-gray-500 mb-6">Count: {product.count}</p>
                           <Count value={quantity[product.id]} reduce={() => reduceQuantity(product.id)} increase={() => increaseQuantity(product.id)} />
                        </div>
                     </div>
                  )}
               </div>
            );
         })}
      </div>
   );
}