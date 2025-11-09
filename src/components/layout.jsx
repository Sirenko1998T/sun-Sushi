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
      <header className="flex items-center justify-between p-4 sticky top-0 z-50">
         <Link to='/'>  <Button img={logo} /></Link>
         <Link to='/menu'> <Button img={menu} label='Our menu' /></Link>
         <Link to='/'>    <div className="text-center">
            <h1>SUN</h1>
            <p>Love Food & Funki Sushi</p>
         </div></Link>
         <Link to='/cart'><Button img={cart} /> <span>{totalQuantity}</span> </Link>
         <Link to='/myAccount'><Button img={user} /></Link>
         <BurgerMenu />
      </header>
      <Outlet />
      <Footer /></>

   )
}