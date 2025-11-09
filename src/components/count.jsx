import Button from "./button"
import { useState } from "react"
export default function Count({ value = 1, reduce, increase }) {

   return (
      <div>
         <Button label='+' onClick={increase} />
         <p>{value}</p>
         <Button onClick={reduce} />
      </div>
   )
}