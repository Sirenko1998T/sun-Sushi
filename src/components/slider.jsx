import React, { useState } from "react";
export default function Slider({ slides = [], rightBtn, leftBtn, componentArr = false, imgArr = false }) {
   let [currIndex, setCurrIndex] = useState(0);
   let rightClick = () => setCurrIndex((prev) => (prev + 1) % img.length)
   let leftClick = () => setCurrIndex((prev) => (prev - 1 + img.length) % img.length)
   return (
      <>
         <button onClick={leftClick}><img src={leftBtn} alt="arrow" /></button>
         {imgArr && (<img src={slides[currIndex]} alt="Sun sushi" />)}
         {componentArr && (slides[currIndex])}
         <button onClick={rightClick}><img src={rightBtn} alt="arrow" /></button>
      </>
   )
}