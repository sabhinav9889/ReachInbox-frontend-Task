"use client"
import Image from "next/image";
import {param} from '../constant';
const Login = ()=>{
    const url = `https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=${param}`;
    const handleLogin = ()=> {
      window.location.href = url;
    }
    return(
        <div className="w-full md:pl-12 md:pr-12 sm:pl-8 sm:pr-8 pl-4 pr-4">
          <div className="flex justify-center p-4">
            <Image src={"/images.jpeg"} width={28} height={12} alt="logo"/>
            <p className="pl-2 font-semibold text-xl">REACHINBOX</p>
          </div>
          <div className="w-full flex justify-center">
            <hr className="border-cardBorder border-b-1 w-full"/> 
          </div>
          <div className="flex mt-40 w-full justify-center">
            <div className="lg:w-1/3 sm:w-1/2 lg:h-80 rounded-2xl border-cardBorder border-2 p-4 bg-cardColor">
                    <p className="p-4 text-center sm:text-xl text-sm font-semibold">Create a new account</p>
                    <div className="mt-4 flex w-full justify-center">
                        <button className="flex md:p-3 pt-3 pb-3 sm:text-sm border-cardLine border  justify-center rounded-md w-4/5 hover:bg-blue-200 hover:text-black" onClick={()=>handleLogin()}> <Image src={"/avj4aturu.webp"} width={20} height={4} alt="googleLogo"></Image><p className="ml-2 text-cardLine sm:text-sm text-xs">Sign Up with Google</p></button>
                    </div>
                    <div className="mt-10 flex w-full justify-center">
                        <button className="md:w-52 w-36 border-blue-700 h-12 rounded-md bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 text-white text-xs md:text-sm" onClick={()=>handleLogin()}>Create an Account</button>
                    </div>
                    <div className="mt-8 flex w-full justify-center text-xs sm:text-sm">
                        <p className="text-cardText">Already have an account?</p><a className="ml-1 text-cardLine hover:text-white" href="#Sign In" onClick={()=>handleLogin()}>Sign In</a>
                    </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="h-10 w-full pt-3 mt-44 flex justify-center text-xs text-cardText bg-cardColor">
                &copy; 2023 Reachinbox. All rights reserved.
            </div>
          </div>
        </div>
    )
}

export default Login;