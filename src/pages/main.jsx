import React from "react";
import Home from "./home";
import Layout from "../components/layout";
import Cart from "./cart";
import Menu from "./menu";
import Login from "./login";
import MyAccount from "./myAccount";
import ProductCard from "../components/product-card";
import { Routes, Route } from 'react-router-dom';
export default function Main() {
   return (


      <Routes>
         <Route path='/' element={<Layout />} >

            <Route index element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/menu/:id' element={<Menu />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/login' element={<Login />} />
            <Route path='/product' element={<ProductCard />} />
            <Route path='/myAccount' element={<MyAccount />} />
         </Route >
      </Routes >


   )
}