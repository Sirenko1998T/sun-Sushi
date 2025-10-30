import React from "react";
import Home from "./home";
import Cart from "./cart";
import Menu from "./menu";
import Login from "./login";
import MyAccount from "./myAccount";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
export default function Main() {
   return (
      <>
         <Router>
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/cart' element={<Cart />} />
               <Route path='/menu' element={<Menu />} />
               <Route path='/login' element={<Login />} />
               <Route path='/myAccount' element={<MyAccount />} />
            </Routes>
         </Router>
      </>
   )
}