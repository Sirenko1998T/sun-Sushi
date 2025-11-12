import React, { useState } from 'react';

export default function AboutUsBlock({
   img,
   subtitle,
   title,
   buttonComponent,
   hoverTitle,
   hoverSubTitle,
   hoverdesc,
   list = [],
}) {
   let [isHovered, setIsHovered] = useState(false);

   return (
      <div
         className="
            relative w-full min-h-[380px]
            rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out
            hover:shadow-xl border border-gray-200 cursor-pointer
         "
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
         style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
         }}
      >


         <div className="absolute inset-0 bg-black/40"></div>


         <div
            className={`
               absolute top-0 left-0 right-0 h-[60%]
               bg-white/95 flex flex-col items-start p-4 sm:p-5 text-black text-left
               transition-all duration-300 ease-in-out  
               ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"}
            `}
         >
            <p className="text-xs sm:text-sm text-gray-600">{hoverSubTitle}</p>
            <h3 className="text-base sm:text-lg font-semibold mb-1">{hoverTitle}</h3>
            <div className="text-xs sm:text-sm text-gray-700 leading-tight">
               {hoverdesc}

               {list && list.length > 0 && (
                  <ul className="mt-2 space-y-1">
                     {list.map((i, index) => (
                        <li key={index} className="text-gray-600">• {i}</li>
                     ))}
                  </ul>
               )}
            </div>
         </div>


         <div className="
            relative z-10 p-15 flex flex-col items-center text-center h-full justify-center
            text-white
         ">
            <p className="text-[10px] sm:text-xs uppercase tracking-wide mb-1 opacity-80">{subtitle}</p>
            <h2 className="text-lg sm:text-xl font-bold mb-3">{title}</h2>
            <div className="mt-auto">{buttonComponent}</div>
         </div>
      </div>
   );
}
