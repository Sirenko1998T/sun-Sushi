import React, { useState, useContext } from 'react'
import Button from '../components/button';
import Input from '../components/input';
import Textarea from '../components/textarea';
import Select from '../components/select';
import { CartContext } from '../context/cartContext';
import { UserContext } from '../context/userContext';
import ProductCardCart from '../components/product-card-cart';

export default function Cart() {
   const { cart, totalQuantity, quantity } = useContext(CartContext)
   const { email, userName, userPhone } = useContext(UserContext)

   const pickupOptions = [
      { value: 'Makedonska - Trg Politika 3' },
      { value: 'Novi Beograd - Bulevar Zorana Đinđića 106a' },
   ];

   const [delivery, setDelivery] = useState(true);
   const [pickup, setPickup] = useState(false);

   return (
      <div className="max-w-7xl mx-auto px-4 py-8">

         <div className="flex flex-col lg:flex-row gap-8">

            <div className="flex-1 flex   gap-8">


               <div className="bg-white flex flex-col rounded-xl shadow-md p-6">

                  <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                     <p className="text-lg font-semibold text-gray-700">
                        Items in cart: {totalQuantity}
                     </p>
                     <h1 className="text-2xl font-bold text-gray-800">
                        Delivery Details
                     </h1>
                  </div>

                  <div className="flex flex-col flex-wrap gap-6">
                     <div className="flex-1 min-w-[250px]">
                        <h3 className="text-sm font-medium text-gray-600 mb-2">Customer Name</h3>
                        <Input type="text" placeholder="Full name" value={userName} />
                     </div>

                     <div className="flex-1 min-w-[250px]">
                        <h3 className="text-sm font-medium text-gray-600 mb-2">Phone Number</h3>
                        <Input type="tel" placeholder="Phone number" value={userPhone} />
                     </div>

                     <div className="flex-1 min-w-[250px]">
                        <h3 className="text-sm font-medium text-gray-600 mb-2">Email Address</h3>
                        <Input type="email" placeholder="Email address" value={email} />
                     </div>

                     <div className="flex-1 min-w-[250px]">
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

                  <div className="flex flex-wrap gap-4 mb-6">
                     <Button
                        label='Delivery'
                        onClick={() => { setDelivery(true); setPickup(false); }}
                        className={`px-6 py-3 rounded-3xl transition-all  ml-1  ${delivery
                           ? 'cursor-pointer bg-black text-white px-5 py-3 rounded-full text-xs font-bold mt-2'
                           : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                           }`}
                     />

                     <Button
                        label='Pickup'
                        onClick={() => { setPickup(true); setDelivery(false); }}
                        className={`px-6 py-3  rounded-3xl  transition-all ${pickup
                           ? 'cursor-pointer bg-black text-white px-5 py-3 rounded-3xl text-xs font-bold mt-2'
                           : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                           }`}
                     />
                  </div>

                  {delivery && (
                     <div className="flex flex-col gap-4">
                        <div>
                           <h3 className="text-sm font-medium text-gray-600 mb-2">Delivery Address</h3>
                           <Input type="text" placeholder='Enter a new address' />
                        </div>

                        <div>
                           <h3 className="text-sm font-medium text-gray-600 mb-2">Delivery Note</h3>
                           <Textarea placeholder='Add additional information related to your delivery (optional).' />
                        </div>
                     </div>
                  )}

                  {pickup && (
                     <div className="flex flex-col gap-2">
                        <h3 className="text-sm font-medium text-gray-600 mb-2">Pickup Location</h3>
                        <Select
                           name="pickup"
                           options={[{ value: '-- Select a pickup location --' }, ...pickupOptions]}
                           onChange={() => { }}
                        />
                     </div>
                  )}

                  <div className="mt-6">
                     <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-sm font-medium text-gray-600">Promo Code</h3>
                        <Button label='i' className="w-6 h-6 bg-gray-300 text-gray-700 rounded-full text-xs p-0" />
                     </div>
                     <Input type="text" placeholder='Enter promo code (optional)' />
                  </div>

                  <div className="mt-6">
                     <h3 className="text-sm font-medium text-gray-600 mb-4">Payment Method</h3>

                     <div className="flex flex-col gap-3">
                        <label className="flex items-center gap-3 cursor-pointer">
                           <input type="radio" name="payment" value="Cash on delivery" className="w-4 h-4 text-blue-600" />
                           <span className="text-gray-700">Cash on delivery</span>
                        </label>

                        <label className="flex items-center gap-3 cursor-pointer">
                           <input type="radio" name="payment" value="Card payment on delivery" checked className="w-4 h-4 text-blue-600" />
                           <span className="text-gray-700">Card payment on delivery</span>
                        </label>
                     </div>
                  </div>
               </div>
            </div>


            <div className="w-full lg:w-[380px] bg-white rounded-xl shadow-md p-6 h-fit sticky top-8">
               <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h1>

               <div className="mb-6 flex flex-col gap-4">
                  <ProductCardCart products={cart} />
               </div>

               <div className="border-t border-gray-200 pt-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                     Total: {cart.reduce((acc, i) => acc + (i.quantity * i.price), 0)} RSD
                  </h3>
                  <Button
                     label='ORDER'
                     className="cursor-pointer bg-black text-white px-15 py-3 rounded-full text-xs font-bold mt-2"
                  />
               </div>
            </div>

         </div>
      </div>
   )
}
