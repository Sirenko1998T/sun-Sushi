import React, { useContext } from "react";
import Button from '../components/button';
import Input from '../components/input';
import edit from '../assets/svgicons/edit-black.svg';
import confirm from '../assets/svgicons/confirm-green.svg';
import trash from '../assets/svgicons/trash-black.svg';

import { UserContext } from "../context/userContext.jsx";





export default function MyAccount() {
   const { email, password, setEmail, setPassword, user, setUser, userName, setUserName, userPhone, setUserPhone } = useContext(UserContext);

   return (<>
      <div className="max-w-4xl mx-auto px-4 py-8">
         <h1 className="text-3xl font-bold text-gray-800 mb-8">My Account</h1>

         <div className="bg-white rounded-xl shadow-md p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
               <h3 className="text-lg font-semibold text-gray-700">Username</h3>
               <div className="flex items-center space-x-2">
                  <p className="text-gray-600"> {userName}</p>
                  <Button img={edit} className="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg" />
               </div>
            </div>

            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
               <h3 className="text-lg font-semibold text-gray-700">Email</h3>
               <p className="text-gray-700">{email}</p>
            </div>

            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
               <h3 className="text-lg font-semibold text-gray-700">Phone Number</h3>
               <p className="text-gray-600"> {userPhone}</p>
            </div>

            <div className="border-b border-gray-200 pb-4">
               <h3 className="text-lg font-semibold text-gray-700 mb-3">Delivery Address</h3>
               <div className="flex space-x-2">
                  <Input type="text" placeholder="Enter delivery address" className="flex-1" />
                  <Button label='+' className="bg-blue-600 hover:bg-blue-700 text-white px-4" />
               </div>
            </div>

            <div className="border-b border-gray-200 pb-4">
               <h3 className="text-lg font-semibold text-gray-700 mb-2">Loyalty Program</h3>
               <p className="text-gray-600">You have 150 loyalty points</p>
            </div>

            <div>
               <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Orders</h2>
               <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <p className="text-gray-500 text-lg">You have no orders</p>
               </div>
            </div>
         </div>
      </div>
   </>);

}