import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "./button";
import BurgerMenu from "./burger-menu";
import Footer from "./footer.jsx";
import logo from "../assets/svgicons/logo.svg";
import cart from "../assets/svgicons/cart-shopping-fast.svg";
import user from "../assets/svgicons/circle-user.svg";
import menu from "../assets/svgicons/our-menu.svg";
import { CartContext } from "../context/cartContext.jsx";

export default function Layout() {
   const { totalQuantity } = useContext(CartContext);

   return (
      <>
         <header className="relative flex items-center justify-between p-4 sticky top-0 z-50 bg-white shadow-md">

            <div className="flex items-center space-x-4">
               <Link to="/" className="flex items-center">
                  <Button img={logo} className="hover:scale-110 transition-transform w-10 h-10" />
               </Link>

               <Link to="/menu" className="hidden md:flex">
                  <Button
                     img={menu}
                     label="Our menu"
                     className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full shadow-lg 
                     hover:bg-gray-900 hover:scale-105 transition-all duration-300 font-semibold text-base"
                     imgClassName="rounded-full bg-white w-6 h-5"
                  />
               </Link>
            </div>

            <Link to="/" >    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
               <h1 className="text-4xl md:text-4xl font-extrabold text-black drop-shadow-md">
                  SUN
               </h1>
               <p className="text-base md:text-lg text-gray-700 tracking-wide">
                  Love Food & Funky Sushi
               </p>
            </div> </Link>

            <div className="flex items-center space-x-4">
               <Link to="/cart" className="relative">
                  <Button img={cart} className="hover:scale-110 transition-transform" />
                  <span className="absolute -top-2 -right-2 bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                     {totalQuantity}
                  </span>
               </Link>

               <Link to="/myAccount" className="hidden md:flex">
                  <Button img={user} className="hover:scale-110 transition-transform" />
               </Link>

               <BurgerMenu />
            </div>
         </header>

         <Outlet />
         <Footer />
      </>
   );
}
