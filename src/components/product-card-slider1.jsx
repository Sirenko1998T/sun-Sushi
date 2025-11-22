import React from 'react';
import Button from './button';
import { useNavigate } from 'react-router-dom';


export default function ProductCardSlider1({ products }) {
   const navigate = useNavigate();
   return (
      <div flex flex-wrap flex-col>
         {products.map((i, index) => (
            <div key={index} className='' >

               <div className='relative'>
                  <img src={i.img} alt={i.name} />
                  <Button onClick={() => navigate(`/menu/${i.id}`)} label='ADD TO BASKET ' className='rounded-full absolute top-[80%] left-[50%]  px-7 py-3 bg-black text-white 
             hover:bg-gray-900 text-xs font-bold' />
               </div>



               <h3  >{i.name}</h3>
               <p  >{i.price}</p>


            </div>
         ))}
      </div>


   );
}
