import React, { useState } from "react";
export default function Slider({ img, rightBtn, leftBtn, }) {
   let [currIndex, setCurrIndex] = useState(0);
   let rightClick = () => setCurrIndex((prev) => (prev + 1) % img.length)
   let leftClick = () => setCurrIndex((prev) => (prev - 1 + img.length) % img.length)
   return (
      <>
         <button onClick={leftClick}><img src={leftBtn} alt="arrow" /></button>
         {<img src={img[currIndex]} alt="Sun sushi" />}
         <button onClick={rightClick}><img src={rightBtn} alt="arrow" /></button>
      </>
   )
}