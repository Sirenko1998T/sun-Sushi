import React, { useState } from 'react';
import cross from '../assets/svgicons/cross-black.svg';
import Button from './button';


export default function TermsOfUse({ onClick }) {

   return (

      <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4">
         <div className="bg-white rounded-lg w-4/5 h-4/5 overflow-y-auto relative p-6 shadow-xl">


            <Button
               img={cross}
               onClick={onClick}
               className="absolute top-4 right-4 p-1 hover:bg-gray-200 rounded-full"
            />


            <div className="max-w-4xl mx-auto px-4 py-6">
               <div className="prose prose-lg max-w-none text-gray-800">
                  <h2 className="text-3xl font-bold mb-6">Terms and Conditions</h2>

                  <h2 className="text-2xl font-bold mb-4 mt-8">Company Data</h2>
                  <div className="bg-gray-50 rounded-lg p-6 mb-8">
                     <p className="mb-2"><span className="font-semibold">Name:</span> Sun Sushi Ltd</p>
                     <p className="mb-2"><span className="font-semibold">Headquarters:</span> 123 Ocean Avenue, 11000 Belgradia</p>
                     <p className="mb-2"><span className="font-semibold">Activity code:</span> 5610 – Operations of restaurants and mobile catering businesses</p>
                     <p className="mb-2"><span className="font-semibold">ID:</span> 12345678</p>
                     <p className="mb-2"><span className="font-semibold">TIN:</span> 87654321</p>
                     <p className="mb-2"><span className="font-semibold">Phone:</span> +381 11 1234567</p>
                     <p className="mb-2"><span className="font-semibold">Email:</span> info@sun-sushi.com</p>
                     <p><span className="font-semibold">WEB:</span> <a href="https://sun-sushi.com/" className="text-blue-600 hover:text-blue-800 underline">https://sun-sushi.com/</a></p>
                  </div>

                  <h2 className="text-2xl font-bold mb-4 mt-8">Copyright</h2>
                  <p className="mb-8 leading-relaxed">
                     The content displayed on the https://sun-sushi.com/ website is copyrighted by the authorized manufacturer. The production material and design contained within the product are intended for personal use only and may not be used for commercial purposes or commercially distributed without permission.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 mt-8">Delivery</h2>
                  <p className="mb-8 leading-relaxed">
                     All orders are prepared to high standards and delivered within the estimated time based on your location and preparation duration. Each order is packed in packaging suitable for transport. Photos are for reference only; presentation may vary.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 mt-8">Contact Information – Call Center</h2>
                  <p className="mb-8 leading-relaxed">
                     Customers can contact customer service at +381 11 1234567, via email at info@sun-sushi.com, or at 123 Ocean Avenue, 11000 Belgradia, for order info, complaints, or cancellations.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 mt-8">Availability</h2>
                  <p className="mb-8 leading-relaxed">
                     The offer from https://sun-sushi.com/ includes a limited quantity of products; availability of all items cannot always be guaranteed.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 mt-8">Praises, Complaints, and Claims</h2>
                  <p className="mb-8 leading-relaxed">
                     For compliments, complaints, and claims, contact +381 11 1234567, email info@sun-sushi.com, or 123 Ocean Avenue, 11000 Belgradia.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 mt-8">Protection of User Privacy</h2>
                  <p className="mb-8 leading-relaxed">
                     Sun Sushi Ltd is committed to protecting customer privacy. Only necessary customer data is collected and used for business purposes. Customers may opt out of marketing communications. Data is strictly stored and accessed only by employees who need it.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 mt-8">Payment Methods</h2>
                  <p className="mb-8 leading-relaxed">Payment can be made by card or cash upon pickup.</p>

                  <h2 className="text-2xl font-bold mb-4 mt-8">VAT Statement</h2>
                  <p className="mb-8 leading-relaxed">Prices include VAT; no hidden fees.</p>

                  <h2 className="text-2xl font-bold mb-4 mt-8">Refund</h2>
                  <p className="mb-8 leading-relaxed">Refunds to card payments are returned to the original card.</p>

                  <h2 className="text-2xl font-bold mb-4 mt-8">Statement of Conversion</h2>
                  <p className="mb-8 leading-relaxed">
                     Payments are in local currency (Belgradian Dinar – BGD). Conversion to other currencies uses the official exchange rate; minor differences may occur.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}
