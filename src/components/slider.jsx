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
      <div className="relative w-full max-w-4xl mx-auto">
         <div className="flex items-center justify-center gap-4 p-4">
            <button
               onClick={leftClick}
               className="p-3 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-110 z-10"
            >
               <img src={leftBtn} alt="arrow left" className="w-6 h-6" />
            </button>

            <div className="flex-1 flex justify-center items-center min-h-80">
               {imgArr && (
                  <img
                     src={slides[currIndex]}
                     alt="slide"
                     className="w-full max-w-2xl h-80 object-cover rounded-xl shadow-lg"
                  />
               )}

               {componentArr && (
                  <div className="w-full max-w-2xl p-6 bg-white rounded-xl shadow-lg">
                     {slides[currIndex]}
                  </div>
               )}
            </div>

            <button
               onClick={rightClick}
               className="p-3 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-110 z-10"
            >
               <img src={rightBtn} alt="arrow right" className="w-6 h-6" />
            </button>
         </div>

         <div className="flex justify-center space-x-2 mt-4">
            {slides.map((_, index) => (
               <button
                  key={index}
                  onClick={() => setCurrIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currIndex ? 'bg-blue-600 scale-125' : 'bg-gray-300'
                     }`}
               />
            ))}
         </div>
      </div>
   );
}