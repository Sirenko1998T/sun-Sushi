import React, { useState, useEffect } from "react";

export default function Slider({
   slides = [],
   rightBtn,
   leftBtn,
   componentArr = false,
   imgArr = false,
}) {
   const [currIndex, setCurrIndex] = useState(0);
   const slidesToShow = componentArr ? 3 : 1;

   const rightClick = () => {
      const maxIndex = Math.max(0, slides.length - slidesToShow);
      setCurrIndex((prev) => {
         const next = prev + 1;
         return next > maxIndex ? 0 : next;
      });
   };

   const leftClick = () => {
      const maxIndex = Math.max(0, slides.length - slidesToShow);
      setCurrIndex((prev) => {
         const next = prev - 1;
         return next < 0 ? maxIndex : next;
      });
   };

   useEffect(() => {
      const timer = setInterval(() => {
         rightClick();
      }, 2000);
      return () => clearInterval(timer);
   }, [currIndex, slides.length]);

   const getVisibleSlides = () => {
      if (componentArr) {
         return slides.slice(currIndex, currIndex + slidesToShow);
      }
      return [slides[currIndex]];
   };

   const visibleSlides = getVisibleSlides();

   return (
      <div className="relative w-full mx-auto">

         {imgArr && (
            <div className="relative w-full min-h-80">
               <img
                  src={slides[currIndex]}
                  alt="slide"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
               />
               <button
                  onClick={leftClick}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/50 shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-110 z-10"
               >
                  <img src={rightBtn} alt="arrow left" className="w-6 h-6" />
               </button>
               <button
                  onClick={rightClick}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/50 shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-110 z-10"
               >
                  <img src={leftBtn} alt="arrow right" className="w-6 h-6" />
               </button>
               <div className="flex justify-center space-x-2 mt-4">
                  {Array.from({ length: Math.ceil(slides.length / slidesToShow) }).map((_, index) => (
                     <button
                        key={index}
                        onClick={() => setCurrIndex(index * slidesToShow)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${Math.floor(currIndex / slidesToShow) === index
                           ? "bg-black scale-125"
                           : "bg-gray-300"
                           }`}
                     />
                  ))}
               </div>
            </div>

         )}

         {componentArr && (
            <div className="flex items-center justify-center gap-1 p-2">
               <button
                  onClick={leftClick}

               >
                  <img src={rightBtn} alt="arrow left" className="w-6 h-6" />
               </button>

               <div className="flex-1 flex justify-center items-center gap-1 min-h-[500px]">
                  {visibleSlides.map((slide, index) => (
                     <div
                        key={currIndex + index}
                        className="flex-1 max-w-[380px] h-[500px] rounded-xl overflow-hidden"
                     >
                        {slide}
                     </div>
                  ))}
               </div>

               <button
                  onClick={rightClick}

               >
                  <img src={leftBtn} alt="arrow right" className="w-6 h-6" />
               </button>
            </div>
         )}


      </div>
   );
}
