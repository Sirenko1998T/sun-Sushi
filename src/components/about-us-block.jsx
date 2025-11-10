import React, { useState } from 'react';
export default function AboutUsBlock({ img, subtitle, title, buttonComponent, hoverTitle, hoverSubTitle, hoverdesc, list = [] }) {
   let [isHovered, setIsHovered] = useState(false);
   return (
      <div
         className="relative w-full max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 group border border-gray-200"
         onMouseEnter={() => setIsHovered(!isHovered)}
         onMouseLeave={() => setIsHovered(false)}
      >
         {!isHovered && (
            <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center p-6 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-xl">
               <p className="text-sm text-gray-300 mb-2">{hoverSubTitle}</p>
               <h3 className="text-xl font-bold mb-4">{hoverTitle}</h3>
               <div className="text-base">
                  {hoverdesc}
                  {list && (
                     <ul className="mt-3 space-y-1">
                        {list.map((i, index) => (
                           <li key={index} className="text-gray-300">• {i}</li>
                        ))}
                     </ul>
                  )}
               </div>
            </div>
         )}

         <div className="p-6 flex flex-col items-center text-center">
            <img
               src={img}
               alt="Image"
               className="w-24 h-24 object-cover rounded-full mb-4 border-4 border-gray-100 shadow-md"
            />
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">{subtitle}</p>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
            <div className="mt-auto">
               {buttonComponent}
            </div>
         </div>
      </div>
   )
}