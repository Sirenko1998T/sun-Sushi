import Button from "./button"
import { useState } from "react"
export default function Count({ value = 1, reduce, increase }) {

   return (
      <div className="flex items-center justify-center space-x-4 bg-white rounded-lg border border-gray-200 p-3 w-fit">
         <Button label='-' onClick={reduce} className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full" />
         <p className="text-xl font-semibold text-gray-800 min-w-8 text-center">{value}</p>
         <Button label='+' onClick={increase} className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full" />
      </div>
   )
}