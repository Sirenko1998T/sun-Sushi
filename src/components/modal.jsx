import Button from "./button";
import React, { useContext } from "react";
import { AppContext } from "../context/appContext";

export default function Modal({ text }) {
   const { setShowModalCart, setShowModalCAcc } = useContext(AppContext)
   return (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30">
         <div className="relative w-[90%] max-w-lg bg-white rounded-xl p-6 shadow-lg translate-y-[-20%]">



            <p className="text-gray-800  text-lg mb-8">
               {text}{" "}

            </p>

            <div className="flex justify-center">
               <Button label="CONTINUE" className=" cursor-pointer bg-black text-white px-5 py-3 rounded-full text-xs font-bold mt-2" onClick={() => {
                  setShowModalCAcc(false);
                  setShowModalCart(false);
               }

               } />
            </div>
         </div>
      </div>
   );
}
