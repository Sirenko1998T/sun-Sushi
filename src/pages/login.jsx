import React, { useContext, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Button from "../components/button";
import Input from "../components/input";
import { UserContext } from "../context/userContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
   const auth = getAuth();
   const navigate = useNavigate();
   const { email, setEmail, password, setPassword } = useContext(UserContext);
   const [error, setError] = useState("");
   const [isLoading, setIsLoading] = useState(false);

   const validateEmail = (email) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

   const handleLogin = async () => {
      setError("");
      const trimmedEmail = email.trim();

      if (!validateEmail(trimmedEmail)) {
         setError("Please enter a valid email address.");
         console.log("Invalid email format");
         return;
      }

      if (!password) {
         setError("Please enter your password.");
         console.log("Password is empty");
         return;
      }

      setIsLoading(true);

      try {

         const userCredential = await signInWithEmailAndPassword(auth, trimmedEmail, password);
         console.log("User logged in successfully:", userCredential.user);


         navigate("/");

      } catch (error) {
         console.error("Login error:", error);

         switch (error.code) {
            case "auth/wrong-password":
            case "auth/user-not-found":
            case "auth/invalid-credential":
               setError("Invalid email or password.");
               console.log("Email not found or password incorrect");
               break;
            case "auth/too-many-requests":
               setError("Too many failed attempts. Please try again later.");
               console.log("Too many login attempts");
               break;
            case "auth/user-disabled":
               setError("Your account has been disabled. Contact support.");
               console.log("User account disabled");
               break;
            default:
               setError("Failed to login. Please try again.");
               console.log("Other login error:", error.message);
         }
      } finally {
         setIsLoading(false);
      }
   };

   const handleKeyPress = (e) => {
      if (e.key === "Enter") {
         handleLogin();
      }
   };

   const goToRegister = () => {
      navigate("/register");
   };

   return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
         <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
               WELCOME
            </h2>
            <p className="text-sm text-gray-600 text-center mb-8">
               Please enter your email and password to continue
            </p>

            <div className="space-y-6">
               <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">YOUR EMAIL</p>
                  <Input
                     placeholder="example@email.com"
                     type="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     onKeyPress={handleKeyPress}
                     disabled={isLoading}
                  />
               </div>

               <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">YOUR PASSWORD</p>
                  <Input
                     placeholder="Enter your password"
                     type="password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     onKeyPress={handleKeyPress}
                     disabled={isLoading}
                  />
               </div>

               {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                     <p className="text-sm text-red-600 text-center">{error}</p>
                  </div>
               )}
            </div>

            <div className="mt-10 space-y-4">
               <Button
                  label={isLoading ? "SIGNING IN..." : "CONTINUE"}
                  onClick={handleLogin}
                  disabled={isLoading}
                  className={`w-full py-3 text-lg font-semibold ${isLoading
                     ? "bg-gray-400 cursor-not-allowed"
                     : "bg-black   text-white px-13 py-3 rounded-full font-bold"
                     } text-white`}
               />

               <div className="text-center">
                  <p className="text-sm text-gray-600">
                     Don't have an account?{" "}
                     <Link to='/register'>  <Button
                        label="Register"
                        className="text-black hover:text-gray-800 font-medium"
                     />
                     </Link>

                  </p>
               </div>
            </div>
         </div>
      </div>
   ); b
}
