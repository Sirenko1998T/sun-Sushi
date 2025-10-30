import React from "react";
import Button from "../components/button";
import Input from "../components/input";
export default function Login() {
   return (<>
      <h2>WELCOME</h2>
      <p>YOUR EMAIL</p>
      <Input placeholder=" example@email.com" />
      <Button label="CONTINUE" onClick={() => { }} />
   </>)
}