import React from "react";
export default function InfoBlock({ img, desc,
   title
}) {
   return (
      <div className="info-block flex flex-col items-center text-center bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
         <img src={img} alt="info" className="w-16 h-16 mb-4 object-contain" />
         {title && <h2 className="text-xl font-bold text-gray-800 mb-3">{title}</h2>}
         <p className="text-gray-600 leading-relaxed">{desc}</p>
      </div>
   )
}