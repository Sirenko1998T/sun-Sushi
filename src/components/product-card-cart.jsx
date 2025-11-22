import React, { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import cross from "../assets/svgicons/cross-black.svg";
import Count from "./count";
import Button from "./button.jsx";

export default function ProductCardCart({ products }) {
   const [close, setClose] = useState(true);
   const { quantity, increaseQuantity, reduceQuantity, closeProductCard } = useContext(CartContext);
   const safeProducts = Array.isArray(products) ? products : [];

   return (
      <>
         {close && (
            <div>
               {safeProducts.map((product) => (
                  <div
                     key={product.id}
                     className="flex gap-4 p-4 border-b border-gray-300 relative"
                  >
                     <Button
                        img={cross}
                        onClick={() => {
                           closeProductCard(product.id);


                        }}
                        className="absolute top-2 right-2 p-2 z-25"
                     />

                     <div>
                        <img
                           src={product.img}
                           alt={product.name}
                           className="w-24 h-24 object-cover rounded"
                        />
                     </div>

                     <div className="text-black flex flex-col justify-between">
                        <h2 className="font-semibold">{product.name}</h2>

                        <p className="text-sm text-gray-600">
                           {product.description
                              ?.split(" ")
                              .slice(0, 9)
                              .join(" ")}
                           {product.description?.split(" ").length > 9 && "…"}
                        </p>

                        <p className="font-bold">{product.price} RSD</p>
                        <p className="text-sm text-gray-500">Count: {product.count}</p>

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
                     </div>
                  </div>
               ))}
            </div>
         )}
      </>
   );
}
