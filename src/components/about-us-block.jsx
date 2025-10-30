import React, { useState } from 'react';
export default function AboutUsBlock({ img, subtitle, title, buttonComponent, hoverTitle, hoverSubTitle, hoverdesc, list = [] }) {
   let [isHovered, setIsHovered] = useState(false);
   return (
      <div onMouseEnter={() => setIsHovered(!isHovered)} onMouseLeave={() => setIsHovered(false)} >
         {!isHovered && <div><p>{hoverSubTitle}</p> <h3>{hoverTitle}</h3><div>{hoverdesc}{list && <ul>{list.map((i) => (<li>{i}</li>))}</ul>}</div></div>}
         <img src={img} alt="Image" />
         <p>{subtitle}</p>
         <h2>{title}</h2>
         {buttonComponent}
      </div>
   )
}