import React, { useState, useContext } from 'react'
import Button from '../components/button';
import Input from '../components/input';
import Textarea from '../components/textarea';
import Select from '../components/select';
import { CartContext } from '../context/cartContext';
export default function Cart() {
   const { cart, totalQuantity } = useContext(CartContext)
   let pickupOptions = [
      { value: 'Makedonska - Trg Politika 3' },
      { value: 'Novi Beograd - Bulevar Zorana Đinđića 106a' },

   ];
   let [delivery, setDelivery] = useState(true);
   let [pickup, setPickup] = useState(false);
   return (<>
      <div>

         <div>
            <p>{totalQuantity}</p>
            <h1>Delivery Details</h1>
            <p> {cart.map((i, index) => (
               <div key={index}>{i.name}</div>
            ))}</p>
            <h3>Customer Name</h3>
            <h3>Phone Number</h3>
            <h3>Email Address</h3>
            <h3>Loyalty Program</h3>
            <h3>Food Note</h3>
            <textarea name="" id="" placeholder="Add additional information related to your food preferences, allergies, etc. (optional)"></textarea>
         </div>
         <div>
            <h3>Delivery / Pickup Details</h3>
            <Button label='Delivery' onClick={() => setDelivery(!delivery)} />
            <Button label='Pickup' onClick={() => setPickup(!pickup)} />
            {delivery && <div> <h3>Delivery Address</h3>
               <Input type="text" placeholder='Enter a new address' />
               <h3>Delivery Note</h3>
               <Textarea placeholder='Add additional information related to your delivery (optional).' /> </div>}

            {pickup && <div><h3>Pickup Location</h3>

               <Select name="-- Select a pickup location --" options={pickupOptions} onChange={() => { }} />
            </div>}

            <h3>Promo Code <Button label='i' /></h3>
            <input type="text" placeholder='Enter promo code (optional)' />
            <h3>Payment Method</h3>
            <label>
               <input type="radio" name="payment" value="Cash on delivery" />
               <input type="radio" name="payment" value="Card payment on delivery" />

            </label>

         </div>
         <div>

            <h1>Your Cart</h1>
            <h3>Subtotal</h3>
            <h4>Discount</h4>
            <h3>Total</h3>
         </div>
      </div>


   </>)
}