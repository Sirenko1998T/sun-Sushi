import { createContext, useState } from "react";
import { db } from "../firebase";
import { collection, query, where, getDocs, limit, documentId } from "firebase/firestore";

export let ProductsContext = createContext();

export function ProductsProvider({ children }) {
   const [products, setProducts] = useState([]);
   const [loading, setLoading] = useState(true);


   const fetchProducts = async () => {
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


   return (
      <ProductsContext.Provider value={{ products, loading, fetchProducts }}>
         {children}
      </ProductsContext.Provider>
   );
}