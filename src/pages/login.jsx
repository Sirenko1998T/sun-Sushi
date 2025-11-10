import React from "react";
import Button from "../components/button";
import Input from "../components/input";
export default function Login() {
   return (<>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
         <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">WELCOME</h2>
            <p className="text-sm text-gray-600 text-center mb-8">Please enter your email to continue</p>

            <div className="space-y-6">
               <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">YOUR EMAIL</p>
                  <Input placeholder="example@email.com" type="email" />
               </div>

               <Button
                  label="CONTINUE"
                  onClick={() => { }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
               />
            </div>
         </div>
      </div>
   </>)
}