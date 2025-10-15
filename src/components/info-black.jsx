import React from "react";
export default function InfoBlack({ img, desc }) {
   return (
      <div className="info-black">
         <img src={img} alt="info" />
         <p>{desc}</p>
      </div>
   )
}