import React from "react";
import Button from "./button";
import BurgerMenu from "./burger-menu";
import logo from '../assets/svgicons/logo.svg'
import cart from '../assets/svgicons/cart-shopping-fast.svg';
import user from '../assets/svgicons/circle-user.svg';
import menu from '../assets/svgicons/our-menu.svg';

export default function Header() {
   return (
      <header className="flex items-center justify-between p-4">
         <Button img={logo} />
         <Button img={menu} label='Наше меню' />
         <div className="text-center">
            <h1>SUN</h1>
            <p>Love Food & Funki Sushi</p>
         </div>
         <Button img={cart} />
         <Button img={user} />
         <BurgerMenu />
      </header>

   )
}