import React from "react";

export default function Button({ onClick, label, img }) {
   return (
      <button
         onClick={onClick}
         className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 min-h-12"
      >
         {label && <span className="mx-2">{label}</span>}
         {img && <img src={img} alt={label} className="w-5 h-5" />}
      </button>
   )
}