import React, { useState, useEffect } from "react";

export default function Slider({
   slides = [],
   rightBtn,
   leftBtn,
   componentArr = false,
   imgArr = false,
}) {
   const [currIndex, setCurrIndex] = useState(0);
   const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);


   const getSlidesToShow = () => {
      if (!componentArr) return 1;
      if (windowWidth < 640) return 1;
      if (windowWidth < 1024) return 2;
      return 3;
   };

   const slidesToShow = getSlidesToShow();

   useEffect(() => {
      const handleResize = () => {
         setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, []);

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
      }, 3000);
      return () => clearInterval(timer);
   }, [currIndex, slides.length, slidesToShow]);

   const getVisibleSlides = () => {
      if (componentArr) {
         return slides.slice(currIndex, currIndex + slidesToShow);
      }
      return [slides[currIndex]];
   };

   const visibleSlides = getVisibleSlides();

   return (
      <div className="relative w-full mx-auto px-2 sm:px-4">

         {imgArr && (
            <div className="relative w-full">
               <div className="relative w-full aspect-video sm:aspect-[21/9] lg:aspect-[21/8]">
                  <img
                     src={slides[currIndex]}
                     alt="slide"
                     className="w-full h-full object-cover rounded-lg sm:rounded-xl shadow-lg"
                  />
                  <button
                     onClick={leftClick}
                     className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/50 shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-110 z-10 active:scale-95"
                  >
                     <img src={rightBtn} alt="arrow left" className="w-4 h-4 sm:w-6 sm:h-6" />
                  </button>
                  <button
                     onClick={rightClick}
                     className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/50 shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-110 z-10 active:scale-95"
                  >
                     <img src={leftBtn} alt="arrow right" className="w-4 h-4 sm:w-6 sm:h-6" />
                  </button>
               </div>
               <div className="flex justify-center space-x-2 mt-3 sm:mt-4">
                  {Array.from({ length: Math.ceil(slides.length / slidesToShow) }).map((_, index) => (
                     <button
                        key={index}
                        onClick={() => setCurrIndex(index * slidesToShow)}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${Math.floor(currIndex / slidesToShow) === index
                           ? "bg-black scale-125"
                           : "bg-gray-300"
                           }`}
                     />
                  ))}
               </div>
            </div>
         )}

         {componentArr && (
            <div className="flex items-center justify-center gap-1 sm:gap-2 lg:gap-4 p-2 sm:p-4">
               <button
                  onClick={leftClick}
                  className="flex-shrink-0 p-2 rounded-full hover:bg-gray-100 transition-all duration-200 active:scale-95 z-10"
               >
                  <img src={rightBtn} alt="arrow left" className="w-5 h-5 sm:w-6 sm:h-6" />
               </button>

               <div className="flex-1 flex justify-center items-center gap-2 sm:gap-3 lg:gap-4 min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
                  {visibleSlides.map((slide, index) => (
                     <div
                        key={currIndex + index}
                        className="flex-1 w-full max-w-[100%] sm:max-w-[380px] h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300"
                     >
                        {slide}
                     </div>
                  ))}
               </div>

               <button
                  onClick={rightClick}
                  className="flex-shrink-0 p-2 rounded-full hover:bg-gray-100 transition-all duration-200 active:scale-95 z-10"
               >
                  <img src={leftBtn} alt="arrow right" className="w-5 h-5 sm:w-6 sm:h-6" />
               </button>
            </div>
         )}

      </div>
   );
}