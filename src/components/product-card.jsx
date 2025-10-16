import React, { useState } from "react";
import Button from "./button";

export default function ProductCard({ products = [], homePage = false, menuPage = false, detaledView = false, cardSlider = false }) {
   return (
      <>
         {products.map((product, index) => {
            const [hovered, setHovered] = useState(false);

            return (
               <div key={index}>
                  {homePage && (
                     <div>
                        <div>
                           <img src={product.img} alt={product.name} />
                           <Button label="add to cart" />
                        </div>
                        <p>{product.name}</p>
                        <p>{product.price} RSD</p>
                        <p>{product.count}</p>
                     </div>
                  )}

                  {cardSlider && (
                     <div>
                        <div>
                           <img src={product.img} alt={product.name} />
                           <Button label="view our menu" />
                        </div>
                        <p>{product.category}</p>
                     </div>
                  )}

                  {menuPage && (
                     <div>
                        <div
                           onMouseEnter={() => setHovered(true)}
                           onMouseLeave={() => setHovered(false)}
                        >
                           {hovered && (
                              <div>
                                 <p>{product.name}</p>
                                 <p>{product.description}</p>
                                 <Button label="add to cart" />
                              </div>
                           )}
                           <img src={product.img} alt={product.name} />
                        </div>
                        <p>{product.name}</p>
                        <p>{product.price} RSD</p>
                        <p>{product.count}</p>
                     </div>
                  )}

                  {detaledView && (
                     <div>
                        <div>
                           <img src={product.img} alt={product.name} />
                        </div>
                        <div>
                           <h2>{product.name}</h2>
                           <p>{product.price} RSD</p>
                           <p>{product.count}</p>
                        </div>
                     </div>
                  )}
               </div>
            );
         })}
      </>
   );
}
