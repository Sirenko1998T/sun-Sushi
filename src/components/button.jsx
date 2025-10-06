import React from "react";

export default function Button({ onClick, label, img }) {
   return (
      <button onClick={onClick}>

         {label && label}
         {img && <img src={img} alt={label} />}
      </button>
   )
}
