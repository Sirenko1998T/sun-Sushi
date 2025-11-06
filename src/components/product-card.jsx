import React, { useState } from "react";
import Button from "./button";

import { useNavigate } from 'react-router-dom';




export default function ProductCard({
   products = [],
   homePage = false,
   menuPage = false,
   detaledView = false,
   cardSlider = false,
}) {
   let navigate = useNavigate();
   return (
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
         {products.map((product, index) => {
            const [hovered, setHovered] = useState(false);

            return (
               <div
                  key={index}
                  className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
               >
                  {homePage && (

                     <div className="p-4 text-center" onClick={() => navigate(`/menu/${product.id}`)}>

                        <img
                           src={product.img}
                           alt={product.name}
                           className="w-full h-48 object-cover rounded-md mb-3"
                        />
                        <Button label="Add to cart" />
                        <p className="text-lg font-semibold mt-2">{product.name}</p>
                        <p className="text-gray-600">{product.price} RSD</p>
                        <p className="text-sm text-gray-500">Count: {product.count}</p>

                     </div>

                  )}

                  {cardSlider && (
                     <div className="p-4 text-center" onClick={() => navigate(`/menu/${product.id}`)}>
                        <img
                           src={product.img}
                           alt={product.name}
                           className="w-full h-48 object-cover rounded-md mb-3"
                        />
                        <Button label="View our menu" />
                        <p className="text-gray-700 mt-2">{product.category}</p>
                     </div>
                  )}

                  {menuPage && (
                     <div className="relative p-4">
                        <div
                           onMouseEnter={() => setHovered(true)}
                           onMouseLeave={() => setHovered(false)}
                           className="relative"
                        >
                           <img
                              src={product.img}
                              alt={product.name}
                              className="w-full h-56 object-cover rounded-lg"
                           />
                           {hovered && (
                              <div className="absolute inset-0 bg-black bg-opacity-60 text-white flex flex-col justify-center items-center p-4 rounded-lg transition-opacity">
                                 <p className="text-lg font-semibold mb-1">
                                    {product.name}
                                 </p>
                                 <p className="text-sm mb-3 text-gray-200">
                                    {product.description}
                                 </p>
                                 <Button label="Add to cart" />
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
                     <div className="p-6 flex flex-col sm:flex-row gap-4">
                        <img
                           src={product.img}
                           alt={product.name}
                           className="w-full sm:w-1/2 h-64 object-cover rounded-xl"
                        />
                        <div className="flex flex-col justify-center">
                           <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                           <p className="text-gray-700 mb-1">{product.price} RSD</p>
                           <p className="text-gray-500 mb-3">Count: {product.count}</p>
                           <Button label="Add to cart" />
                        </div>
                     </div>
                  )}
               </div>
            );
         })}
      </div>
   );
}
