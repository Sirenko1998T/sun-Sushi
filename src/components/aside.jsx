import { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/appContext.jsx";

export default function Aside({ category, parentkey = '' }) {
   const {
      water, soda, juice, freshJuice, wine, desserts,
      moonBistro, sideDish, sideSalad, hotDish, noodles, tartar,
      soup, salad, sauces, maki, sashimi, summerMenu, beer,
      californiaRolls, sushiBoxes, nigiri, signatureRolls
   } = useContext(AppContext);

   const [isOpen, setIsOpen] = useState({});
   const [activeCategory, setActiveCategory] = useState(null);

   const categoryRefMap = {
      "Summer Menu": summerMenu,
      "Sushi Boxes": sushiBoxes,
      "Signature Rolls": signatureRolls,
      "Nigiri": nigiri,
      "California Rolls": californiaRolls,
      "Maki": maki,
      "Sashimi": sashimi,
      "Tartar": tartar,
      "Sauces and Add-ons": sauces,
      "Soup": soup,
      "Salad": salad,
      "Noodles": noodles,
      "Hot Dish": hotDish,
      "Side Salad": sideSalad,
      "Side Dish": sideDish,
      "Moon Bistro": moonBistro,
      "Desserts": desserts,
      "Water": water,
      "Soda": soda,
      "Juice": juice,
      "Fresh Juice": freshJuice,
      "Beer": beer,
      "Wine": wine,
   };

   const scrollTo = (ref, key) => {
      if (ref?.current) {
         ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
         setActiveCategory(key);
      }
   };

   const toggleKey = (key) => {
      setIsOpen(prev => ({ ...prev, [key]: !prev[key] }));
   };

   function showCategory(data, currentParentKey = '') {
      if (Array.isArray(data)) {
         return (
            <ul className="ml-4 space-y-1 border-l-2 border-gray-200 pl-4">
               {data.map((item, index) => (
                  <li key={index} className="text-gray-700">
                     {showCategory(item, currentParentKey)}
                  </li>
               ))}
            </ul>
         );
      }

      if (typeof data === "object" && data !== null) {
         return Object.entries(data).map(([key, value]) => {
            const fullKey = currentParentKey + key;
            const ref = categoryRefMap[key];

            return (
               <li key={key} className="mb-1">
                  <button
                     onClick={() => {
                        if (ref) scrollTo(ref, key);
                        toggleKey(fullKey);
                     }}
                     className={`w-full text-left flex items-center justify-between p-2 hover:bg-gray-100 rounded-lg transition-all duration-200 font-medium
                        ${activeCategory === key ? 'bg-yellow-200 text-gray-900' : 'text-gray-800 hover:text-gray-900'}`}
                  >
                     {key}
                     <span className="text-xs text-gray-500 ml-2">
                        {isOpen[fullKey] ? "▲" : "▼"}
                     </span>
                  </button>

                  {isOpen[fullKey] && (
                     <div className="mt-1">
                        {showCategory(value, fullKey)}
                     </div>
                  )}
               </li>
            );
         });
      }

      const ref = categoryRefMap[data];
      return (
         <button
            onClick={() => ref && scrollTo(ref, data)}
            className={`text-gray-600 text-sm py-1 px-2 block hover:text-gray-900 hover:bg-gray-50 rounded transition-colors duration-200 w-full text-left
               ${activeCategory === data ? 'bg-yellow-200 text-gray-900' : ''}`}
         >
            {data}
         </button>
      );
   }


   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach(entry => {
               if (entry.isIntersecting) {
                  const key = Object.keys(categoryRefMap).find(k => categoryRefMap[k]?.current === entry.target);
                  if (key) setActiveCategory(key);
               }
            });
         },
         { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
      );

      Object.values(categoryRefMap).forEach(ref => {
         if (ref?.current) observer.observe(ref.current);
      });

      return () => observer.disconnect();
   }, [categoryRefMap]);

   return (
      <aside className="w-full max-w-md bg-white rounded-xl shadow-sm border border-gray-200 p-4 overflow-hidden sticky top-4">
         <h3 className="text-lg font-bold text-gray-800 mb-4">Menu</h3>
         <nav>
            {showCategory(category)}
         </nav>
      </aside>
   );
}
