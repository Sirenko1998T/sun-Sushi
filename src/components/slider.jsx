import React, { useState } from "react";

export default function Slider({
   slides = [],
   rightBtn,
   leftBtn,
   componentArr = false,
   imgArr = false,
}) {
   const [currIndex, setCurrIndex] = useState(0);

   const rightClick = () =>
      setCurrIndex((prev) => (prev + 1) % slides.length);

   const leftClick = () =>
      setCurrIndex((prev) => (prev - 1 + slides.length) % slides.length);

   return (
      <div className="flex items-center justify-center gap-4 p-4">
         <button
            onClick={leftClick}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
         >
            <img src={leftBtn} alt="arrow left" className="w-6 h-6" />
         </button>

         {imgArr && (
            <img
               src={slides[currIndex]}
               alt="slide"
               className="w-64 h-64 object-cover rounded-xl shadow-md"
            />
         )}

         {componentArr && (
            <div className="p-4 bg-white rounded-xl shadow-md">
               {slides[currIndex]}
            </div>
         )}

         <button
            onClick={rightClick}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
         >
            <img src={rightBtn} alt="arrow right" className="w-6 h-6" />
         </button>
      </div>
   );
}
