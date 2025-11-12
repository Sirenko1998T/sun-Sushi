import React, { useState, useContext } from "react";
import Button from "./button";
import Count from './count';
import { useNavigate } from 'react-router-dom';
import { CartContext } from "../context/cartContext";

export default function ProductCard({
   products = [],
   homePage = false,
   menuPage = false,
   detaledView = false,
   cardSlider = false,
}) {
   const [hovered, setHovered] = useState(null);
   const navigate = useNavigate();
   const { addToCart, quantity, increaseQuantity, reduceQuantity, setCart } = useContext(CartContext);

   if (cardSlider || homePage) {
      return (
         <>
            {products.filter(p => p && p.id).map((product, index) => (
               <div
                  key={product.id || index}
                  className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 w-full"
               >
                  {homePage && (
                     <div
                        className="p-4 text-center cursor-pointer "
                        onClick={() => navigate(`/menu/${product.id}`)}
                     >
                        <img
                           src={product.img}
                           alt={product.name}
                           className="w-full h-75 object-cover rounded-md relative mb-1"
                        />
                        <Button
                           label="ADD TO CART"
                           className="absolute top-[51%] rounded-full px-7 py-3 bg-black text-white 
             hover:bg-gray-900 text-xs font-bold"
                        />

                        <p className="text-lg font-semibold mt-2 text-left">{product.name}</p>
                        <p className="text-gray-600 text-left  font-bold">{product.price} RSD</p>

                     </div>
                  )}

                  {cardSlider && (
                     <div
                        className="p-4 text-center cursor-pointer relative"
                        onClick={() => navigate(`/menu/${product.id}`)}
                     >
                        <img
                           src={product.img}
                           alt={product.name}
                           className="w-full h-70 object-cover rounded-md relative mb-1"
                        />
                        <Button label="View our menu" className="absolute top-[70%] rounded-full px-6 py-3 bg-black text-white 
             hover:bg-gray-900 text-sm font-bold" />
                        <p className="text-gray-700 font-bold text-left capitalize mt-2">
                           {product.category}
                        </p>

                     </div>
                  )}
               </div>
            ))}
         </>
      );
   }

   return (
      <div className={`grid gap-6 ${detaledView
         ? "grid-cols-1"
         : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
         }`}>
         {products.filter(p => p && p.id).map((product, index) => {
            const isItemInCart = quantity[product.id] > 0;

            return (
               <div
                  key={product.id || index}
                  className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 w-full"
               >
                  {menuPage && (
                     <div className="relative ">
                        <div
                           className="relative cursor-pointer"
                           onMouseEnter={() => setHovered(product.id)}
                           onMouseLeave={() => setHovered(null)}
                           onClick={(e) => {

                              if (!e.target.closest('button')) {
                                 navigate(`/menu/${product.id}`);
                              }
                           }}
                        >
                           <img
                              src={product.img}
                              alt={product.name}
                              className="w-full h-65 object-cover rounded-lg"
                           />

                           {hovered === product.id && (
                              <div className="absolute   h-[60%] top-0 inset-0 bg-white/75 bg-opacity-60 text-black flex flex-col    rounded-lg transition-opacity duration-300">
                                 <p className="text-sm font-bold p-1">
                                    {product.name}
                                 </p>
                                 <p className="text-sm mb-3 text-black  ">
                                    {product.description}
                                 </p>

                                 {isItemInCart ? (
                                    <Count
                                       value={quantity[product.id]}
                                       reduce={(e) => {
                                          e?.stopPropagation();
                                          reduceQuantity(product.id);
                                       }}
                                       increase={(e) => {
                                          e?.stopPropagation();
                                          increaseQuantity(product.id);
                                       }}
                                    />
                                 ) : (
                                    <Button
                                       onClick={(e) => {
                                          e.stopPropagation();
                                          addToCart(product.id, products);
                                       }}
                                       label="Add to cart"
                                       className="bg-black absolute left-[10%] bottom-[-50%] text-white px-1 py-1 rounded-full font-bold"
                                    />
                                 )}
                              </div>
                           )}
                        </div>

                        <div className="mt-3 text-left">
                           <p className="text-lg font-semibold">{product.name}</p>
                           <p className="text-black font-semibold">{product.price} RSD</p>
                           <p className="text-sm text-gray-500 p-2">
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
                           <p className="text-2xl font-bold text-gray-800 mb-2">
                              {product.price} RSD
                           </p>
                           <p className="text-gray-500 mb-6">Count: {product.count}</p>

                           {isItemInCart && (
                              <Count
                                 value={quantity[product.id]}
                                 reduce={() => reduceQuantity(product.id)}
                                 increase={() => increaseQuantity(product.id)}
                              />
                           )}
                        </div>
                     </div>
                  )}
               </div>
            );
         })}
      </div>
   );
}