import React from "react";
export default function InfoBlock({ img, desc,
   title
}) {
   return (
      <div className="info-block">
         <img src={img} alt="info" />
         {title && <h2>{title}</h2>}
         <p>{desc}</p>
      </div>
   )
}