import React from "react";

export default function Button({ onClick, label, img, className = "", imgClassName = "" }) {
   return (
      <button
         onClick={onClick}
         className={`${className} cursor-pointer`}


      >
         {label && <span className="mx-2">{label}</span>}
         {img && <img src={img} alt={label} className={imgClassName} />}
      </button >
   );
}
