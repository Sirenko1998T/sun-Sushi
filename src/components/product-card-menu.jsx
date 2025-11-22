import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { CartContext } from "../context/cartContext";
import Button from "./button.jsx";
import Count from "./count.jsx";

export default function ProductCardMenu({ products = [] }) {
   const [hovered, setHovered] = useState(null);
   const navigate = useNavigate();
   const { addToCart, quantity, increaseQuantity, reduceQuantity } = useContext(CartContext);

   if (!products.length) return <p className="text-gray-500">Нет продуктов</p>;

   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         {products.map((product) => {
            const isItemInCart = quantity[product.id] > 0;

            return (
               <div key={product.id || product.name} className="relative group">
                  <div
                     className="cursor-pointer relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
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
                        className="w-full h-64 object-cover rounded-lg"
                     />

                     {hovered === product.id && (
                        <div className="absolute inset-0 bg-white/70 flex flex-col justify-center items-center p-4 gap-2 rounded-lg transition-opacity duration-300">
                           <p className="text-sm font-bold text-black">{product.name}</p>
                           <p className="text-xs text-gray-800 text-center line-clamp-3">{product.description}</p>

                           {isItemInCart ? (
                              <Count
                                 value={quantity[product.id]}
                                 reduce={(e) => { e?.stopPropagation(); reduceQuantity(product.id); }}
                                 increase={(e) => { e?.stopPropagation(); increaseQuantity(product.id); }}
                              />
                           ) : (
                              <Button
                                 onClick={(e) => { e.stopPropagation(); addToCart(product.id, products); }}
                                 label="Add to cart"
                                 className="bg-black text-white px-3 py-1 rounded-full text-xs font-bold mt-2"
                              />
                           )}
                        </div>
                     )}
                  </div>

                  <div className="mt-3 text-left">
                     <p className="text-lg font-semibold truncate">{product.name}</p>
                     <p className="text-gray-800 font-semibold">{product.price} RSD</p>
                     <p className="text-sm text-gray-500">Count: {product.count}</p>
                  </div>
               </div>
            );
         })}
      </div>
   );
}
