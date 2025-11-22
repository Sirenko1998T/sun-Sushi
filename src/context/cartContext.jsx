import { createContext, useState, useEffect, useContext } from "react";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { UserContext } from "./userContext";
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
   const { user } = useContext(UserContext);
   const db = getFirestore();

   const [cart, setCart] = useState([]);
   const [quantity, setQuantity] = useState({});


   useEffect(() => {
      if (!user) {
         setCart([]);
         setQuantity({});
         return;
      }

      const fetchCart = async () => {
         const docRef = doc(db, "users", user.uid);
         const docSnap = await getDoc(docRef);
         if (docSnap.exists()) {
            const data = docSnap.data();
            const userCart = data.cart || [];
            setCart(userCart);

            const qty = {};
            userCart.forEach(item => qty[item.productId] = item.quantity);
            setQuantity(qty);
         }
      };

      fetchCart();
   }, [user]);

   const saveCartToFirestore = async (newCart) => {
      if (!user) return;
      const docRef = doc(db, "users", user.uid);
      await updateDoc(docRef, { cart: newCart });
   };

   const addToCart = (productId, products) => {
      let item = products.find(p => p.id === productId);
      const existing = cart.find(i => i.productId === productId);
      let newCart;
      if (existing) {
         newCart = cart.map(i => i.productId === productId ? { ...i, quantity: i.quantity + 1 } : i);
      } else {
         newCart = [...cart, { productId, quantity: 1, ...item }];
      }
      setCart(newCart);
      setQuantity(prev => ({ ...prev, [productId]: (prev[productId] || 0) + 1 }));
      saveCartToFirestore(newCart);
   };

   const increaseQuantity = (id) => {
      const newCart = cart.map(i => i.productId === id ? { ...i, quantity: i.quantity + 1 } : i);
      setCart(newCart);
      setQuantity(prev => ({ ...prev, [id]: prev[id] + 1 }));
      saveCartToFirestore(newCart);
   };

   const reduceQuantity = (id) => {
      const newCart = cart
         .map(i => i.productId === id ? { ...i, quantity: i.quantity - 1 } : i)
         .filter(i => i.quantity > 0);
      setCart(newCart);
      setQuantity(prev => {
         const updated = { ...prev, [id]: prev[id] - 1 };
         if (updated[id] <= 0) delete updated[id];
         return updated;
      });
      saveCartToFirestore(newCart);
   };

   const totalQuantity = Object.values(quantity).reduce((acc, i) => acc + i, 0);
   const closeProductCard = (id) => {
      const product = cart.find(i => i.id === id);
      if (!product) return;

      const newCart = cart.filter(p => p.id !== id);

      setCart(newCart);
      setQuantity(prev => {
         const updated = { ...prev };
         delete updated[id];
         return updated;
      });

      saveCartToFirestore(newCart);
   };


   return (
      <CartContext.Provider value={{ cart, addToCart, quantity, increaseQuantity, reduceQuantity, totalQuantity, closeProductCard }}>
         {children}
      </CartContext.Provider>
   );
};
