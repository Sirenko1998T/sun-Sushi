import React, { useState } from "react";

/// cluchi perechutaay❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️ v sandbox demo
export default function Aside({ category, parentkey = '' }) {
   let [isOpen, setIsOpen] = useState({});
   let tooggleKey = (key) => setIsOpen(prev => ({ ...prev, [key]: !prev[key] }));
   function showCategory(data) {

      if (Array.isArray(data)) {
         return (
            <ul className="ml-4 space-y-1 border-l-2 border-gray-200 pl-4">
               {data.map((item, index) => (
                  <li key={index} className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                     {showCategory(item, '')}
                  </li>
               ))}
            </ul>
         );

      } else if (typeof data === "object" && data !== null) {

         return Object.entries(data).map(([key, value]) => {
            let fullkey = parentkey + key;
            return (

               <li key={key} className="mb-1">
                  <button
                     onClick={() => tooggleKey(fullkey)}
                     className="w-full text-left flex items-center justify-between p-2 hover:bg-gray-100 rounded-lg transition-all duration-200 text-gray-800 hover:text-gray-900 font-medium"
                  >
                     {key}
                     <span className="text-xs text-gray-500 ml-2">{isOpen[fullkey] ? "▲" : "▼"}</span>
                  </button>

                  {isOpen[fullkey] && (
                     <div className="mt-1">
                        {showCategory(value, fullkey)}
                     </div>
                  )}
               </li>
            )
         });


      } else {

         return <span className="text-gray-600 text-sm py-1 px-2 block">{data}</span>;
      }
   }



   return (
      <aside className="w-full max-w-md bg-white rounded-xl shadow-sm border border-gray-200 p-4 overflow-hidden">

         {showCategory(category)}
      </aside>
   );
}