import React from "react";
import { Link, Outlet } from 'react-router-dom';
import Button from "./button";
import BurgerMenu from "./burger-menu";
import Footer from "./footer.jsx"
import logo from '../assets/svgicons/logo.svg';
import cart from '../assets/svgicons/cart-shopping-fast.svg';
import user from '../assets/svgicons/circle-user.svg';
import menu from '../assets/svgicons/our-menu.svg';


export default function Layout() {
   return (<>
      <header className="flex items-center justify-between p-4 sticky top-0 z-50">
         <Button img={logo} />
         <Link to='/menu'> <Button img={menu} label='Our menu' /></Link>
         <div className="text-center">
            <h1>SUN</h1>
            <p>Love Food & Funki Sushi</p>
         </div>
         <Link to='/cart'><Button img={cart} /></Link>
         <Link to='/myAccount'><Button img={user} /></Link>
         <BurgerMenu />
      </header>
      <Outlet />
      <Footer /></>

   )
}