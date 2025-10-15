import React, { useState } from "react";

/// cluchi perechutaay❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️ v sandbox demo
export default function Aside({ category, parentkey = '' }) {
   let [isOpen, setIsOpen] = useState({});
   let tooggleKey = (key) => setIsOpen(prev => ({ ...prev, [key]: !prev[key] }));
   function showCategory(data) {

      if (Array.isArray(data)) {
         return (
            <ul>
               {data.map((item, index) => (
                  <li key={index}>
                     {showCategory(item, '')}
                  </li>
               ))}
            </ul>
         );

      } else if (typeof data === "object" && data !== null) {

         return Object.entries(data).map(([key, value]) => {
            let fullkey = parentkey + key;
            return (

               <li key={key}> <button onClick={() => tooggleKey(fullkey)}>   {key} {isOpen[fullkey] ? "▲" : "▼"}</button>


                  {isOpen[key] && showCategory(value, fullkey)}
               </li>
            )
         });


      } else {

         return <span>{data}</span>;
      }
   }



   return (
      <aside>

         {showCategory(category)}
      </aside>
   );
}