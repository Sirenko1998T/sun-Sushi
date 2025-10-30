import React from 'react';
import Button from '../components/button';
import Input from '../components/input';
import edit from '../assets/svgicons/edit-black.svg';
import confirm from '../assets/svgicons/confirm-green.svg';
import trash from '../assets/svgicons/trash-black.svg';
export default function MyAccount() {
   return (<>
      <h1>My Account</h1>
      <h3>Username</h3>
      <div><p></p><Button img={edit} />
      </div>
      <div> <input type='text' />/<Button img={confirm} />
      </div>
      <h3>Email</h3>
      <p></p>
      <h3>Phone Number</h3>
      <p></p>
      <h3>Delivery Address</h3>
      <div> <input type="text" /> <Button label='+' /></div>
      <h3>Loyalty Program</h3>
      <h2>Your Orders</h2>
      <p>You have no orders</p>
   </>);

}