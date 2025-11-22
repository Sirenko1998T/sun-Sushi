import Button from "./button"
import { useState } from "react"

export default function Count({ value = 1, reduce, increase, className = "", valueClass = '' }) {
   return (
      <div
         className={`flex bg-black cursor-pointer  text-white rounded-full font-bold items-center justify-center ${className}`}
      >
         <Button
            label='-'
            onClick={reduce}
            className="w-8 h-8 flex mx-5 items-center justify-center text-white"
         />
         <p className={`text-sm font-semibold text-white min-w-5 text-center ${valueClass}`}>{value}</p>
         <Button
            label='+'
            onClick={increase}
            className="w-8 h-8 mx-5 flex items-center justify-center text-white"
         />
      </div>
   )
}
