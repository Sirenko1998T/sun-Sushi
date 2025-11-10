import React, { useState, useContext } from 'react'
import Button from '../components/button';
import Input from '../components/input';
import Textarea from '../components/textarea';
import Select from '../components/select';
import { CartContext } from '../context/cartContext';
import ProductCard from '../components/product-card';


export default function Cart() {
   const { cart, totalQuantity, quantity } = useContext(CartContext)
   let pickupOptions = [
      { value: 'Makedonska - Trg Politika 3' },
      { value: 'Novi Beograd - Bulevar Zorana Đinđića 106a' },

   ];
   let [delivery, setDelivery] = useState(true);
   let [pickup, setPickup] = useState(false);

   return (<>
      <div className="max-w-7xl mx-auto px-4 py-8">

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
               <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-center justify-between mb-6">
                     <p className="text-lg font-semibold text-gray-700">Items in cart: {totalQuantity}</p>
                     <h1 className="text-2xl font-bold text-gray-800">Delivery Details</h1>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                        <h3 className="text-sm font-medium text-gray-600 mb-2">Customer Name</h3>
                        <Input type="text" placeholder="Full name" />
                     </div>
                     <div>
                        <h3 className="text-sm font-medium text-gray-600 mb-2">Phone Number</h3>
                        <Input type="tel" placeholder="Phone number" />
                     </div>
                     <div>
                        <h3 className="text-sm font-medium text-gray-600 mb-2">Email Address</h3>
                        <Input type="email" placeholder="Email address" />
                     </div>
                     <div>
                        <h3 className="text-sm font-medium text-gray-600 mb-2">Loyalty Program</h3>
                        <Input type="text" placeholder="Loyalty number" />
                     </div>
                  </div>

                  <div className="mt-6">
                     <h3 className="text-sm font-medium text-gray-600 mb-2">Food Note</h3>
                     <Textarea placeholder="Add additional information related to your food preferences, allergies, etc. (optional)" />
                  </div>
               </div>

               <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Delivery / Pickup Details</h3>

                  <div className="flex space-x-4 mb-6">
                     <Button
                        label='Delivery'
                        onClick={() => { setDelivery(true); setPickup(false); }}
                        className={`px-6 py-3 rounded-lg transition-all ${delivery ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                     />
                     <Button
                        label='Pickup'
                        onClick={() => { setPickup(true); setDelivery(false); }}
                        className={`px-6 py-3 rounded-lg transition-all ${pickup ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                     />
                  </div>

                  {delivery && <div className="space-y-4">
                     <div>
                        <h3 className="text-sm font-medium text-gray-600 mb-2">Delivery Address</h3>
                        <Input type="text" placeholder='Enter a new address' />
                     </div>
                     <div>
                        <h3 className="text-sm font-medium text-gray-600 mb-2">Delivery Note</h3>
                        <Textarea placeholder='Add additional information related to your delivery (optional).' />
                     </div>
                  </div>}

                  {pickup && <div>
                     <h3 className="text-sm font-medium text-gray-600 mb-2">Pickup Location</h3>
                     <Select name="pickup" options={[{ value: '-- Select a pickup location --' }, ...pickupOptions]} onChange={() => { }} />
                  </div>}

                  <div className="mt-6">
                     <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-sm font-medium text-gray-600">Promo Code</h3>
                        <Button label='i' className="w-6 h-6 bg-gray-300 text-gray-700 rounded-full text-xs p-0" />
                     </div>
                     <Input type="text" placeholder='Enter promo code (optional)' />
                  </div>

                  <div className="mt-6">
                     <h3 className="text-sm font-medium text-gray-600 mb-4">Payment Method</h3>
                     <div className="space-y-3">
                        <label className="flex items-center space-x-3 cursor-pointer">
                           <input type="radio" name="payment" value="Cash on delivery" className="w-4 h-4 text-blue-600" />
                           <span className="text-gray-700">Cash on delivery</span>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer">
                           <input type="radio" name="payment" value="Card payment on delivery" className="w-4 h-4 text-blue-600" />
                           <span className="text-gray-700">Card payment on delivery</span>
                        </label>
                     </div>
                  </div>
               </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 h-fit sticky top-8">
               <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h1>
               <div className="mb-6">
                  <ProductCard products={cart} homePage={false} menuPage={false} detaledView={true} cardSlider={false} />
               </div>

               <div className="border-t border-gray-200 pt-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                     Total: {cart.reduce((acc, i) => acc + (i.price * quantity[i.id]), 0)} RSD
                  </h3>
                  <Button label='ORDER' className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg font-semibold" />
               </div>
            </div>
         </div>
      </div>
   </>)
}