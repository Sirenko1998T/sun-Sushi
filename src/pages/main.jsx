import React from "react";
import Home from "./home";
import Layout from "../components/layout";
import Cart from "./cart";
import Menu from "./menu";
import Login from "./login";
import MyAccount from "./myAccount";
import { Routes, Route } from 'react-router-dom';
export default function Main() {
   return (


      <Routes>
         <Route path='/' element={<Layout />} >

            <Route index element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/login' element={<Login />} />
            <Route path='/myAccount' element={<MyAccount />} />
         </Route >
      </Routes >


   )
}