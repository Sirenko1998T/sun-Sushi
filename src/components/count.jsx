import Button from "./button"
import { useState } from "react"
export default function Count({ value = 1, reduce, increase }) {

   return (
      <div className="flex bg-black absolute bottom-[-37%] left-[10%] text-white   rounded-full font-bold items-center justify-center    ">
         <Button label='-' onClick={reduce} className="w-8 h-8 flex items-center justify-center  text-white   " />
         <p className="text-sm font-semibold text-white min-w-5 text-center">{value}</p>
         <Button label='+' onClick={increase} className="w-8 h-8 flex items-center justify-center  text-white " />
      </div>
   )
}