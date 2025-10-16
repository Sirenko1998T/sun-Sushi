import { createContext, useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export let ProductsContext = createContext();

export function ProductsProvider({ children }) {
   const [products, setProducts] = useState([]);
   const [loading, setLoading] = useState(true);


   const fetchAllProducts = async () => {
      setLoading(true);
      try {
         const productsCollection = collection(db, "products");
         const snapshot = await getDocs(productsCollection);
         const fetchedProducts = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
         }));
         setProducts(fetchedProducts);
      } catch (err) {
         console.error("Error fetching products:", err);
      } finally {
         setLoading(false);
      }
   };


   useEffect(() => {
      fetchAllProducts();
   }, []);


   return (
      <ProductsContext.Provider value={{
         products,
         loading,


      }}>
         {children}
      </ProductsContext.Provider>
   );
}