import React, { useContext } from "react";
import { Link, Outlet } from 'react-router-dom';
import Button from "./button";
import BurgerMenu from "./burger-menu";
import Footer from "./footer.jsx"
import logo from '../assets/svgicons/logo.svg';
import cart from '../assets/svgicons/cart-shopping-fast.svg';
import user from '../assets/svgicons/circle-user.svg';
import menu from '../assets/svgicons/our-menu.svg';
import { CartContext } from "../context/cartContext.jsx";
export default function Layout() {
   const { totalQuantity } = useContext(CartContext)
   return (<>
      <header className="flex items-center justify-between p-4 sticky top-0 z-50 bg-white shadow-md">
         <Link to='/' className="flex items-center">  <Button img={logo} className="hover:scale-110 transition-transform" /></Link>
         <Link to='/menu' className="hidden md:flex"> <Button img={menu} label='Our menu' className="hover:text-blue-600 transition-colors" /></Link>
         <Link to='/' className="flex flex-col items-center">    <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800">SUN</h1>
            <p className="text-sm text-gray-600">Love Food & Funki Sushi</p>
         </div></Link>
         <Link to='/cart' className="flex items-center space-x-1 relative"><Button img={cart} className="hover:scale-110 transition-transform" /> <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">{totalQuantity}</span> </Link>
         <Link to='/myAccount' className="hidden md:flex"><Button img={user} className="hover:scale-110 transition-transform" /></Link>
         <BurgerMenu />
      </header>
      <Outlet />
      <Footer /></>

   )
}