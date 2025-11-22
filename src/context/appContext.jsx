import {
   createContext, useState, useRef
} from "react";





export const AppContext = createContext();
export const AppProvider = ({ children }) => {
   const [showModalCart, setShowModalCart] = useState(false);
   const [showModalAcc, setShowModalCAcc] = useState(false)
   let closeTerms = () => {
      setTermsOfUse(false);
   }
   let closePrivacy = () => {
      setPrivacyPolicy(false);
   }


   const summerMenu = useRef(null);
   const sushiBoxes = useRef(null);

   const signatureRolls = useRef(null);
   const nigiri = useRef(null);
   const californiaRolls = useRef(null);
   const maki = useRef(null);
   const sashimi = useRef(null);
   const tartar = useRef(null);
   const sauces = useRef(null);

   const soup = useRef(null);
   const salad = useRef(null);
   const noodles = useRef(null);
   const hotDish = useRef(null);
   const sideSalad = useRef(null);
   const sideDish = useRef(null);
   const moonBistro = useRef(null);
   const desserts = useRef(null);

   const water = useRef(null);
   const soda = useRef(null);
   const juice = useRef(null);
   const freshJuice = useRef(null);
   const beer = useRef(null);
   const wine = useRef(null);



   let value = { water, showModalCart, setShowModalCart, showModalAcc, setShowModalCAcc, beer, soda, juice, freshJuice, wine, desserts, moonBistro, sideDish, sideSalad, hotDish, noodles, tartar, soup, salad, sauces, maki, sashimi, summerMenu, californiaRolls, sushiBoxes, nigiri, signatureRolls };

   return (
      <AppContext.Provider value={value}>
         {children}
      </AppContext.Provider>
   )
}