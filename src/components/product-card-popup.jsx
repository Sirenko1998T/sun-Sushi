import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import Button from "./button";
import Count from "./count";

export default function ProductCardPopup({ products }) {
   const { addToCart, quantity, increaseQuantity, reduceQuantity } = useContext(CartContext);

   return (
      <div>
         {products.filter(p => p && p.id).map((product, index) => {
            const isItemInCart = quantity[product.id] > 0;

            return (
               <div key={product.id} className=" flex flex-col lg:flex-row gap-8">
                  <img
                     src={product.img}
                     alt={product.name}
                     className="w-full lg:w-1/1 h-64 lg:h-100 object-cover rounded-xl"
                  />

                  <div className="flex flex-col justify-center w-full lg:w-1/2 p-2">
                     <h2 className="text-3xl font-bold mb-4">{product.name}</h2>

                     <p className="text-xl text-gray-700 mb-4">{product.description}</p>

                     <p className="text-2xl font-bold text-gray-800 mb-2">
                        {product.price} RSD
                     </p>

                     <p className="text-gray-500 mb-6">Count: {product.count}</p>

                     {isItemInCart ? (
                        <Count valueClass='px-10'
                           className="  my-5"
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
                           className="bg-black   text-white px-1 py-1 rounded-full font-bold "
                        />
                     )}
                  </div>
               </div>
            );
         })}
      </div>
   );
}
