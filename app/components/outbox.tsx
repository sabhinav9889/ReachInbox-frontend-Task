"use client"
import LeftNav from "./leftNav";
import UpperNav from "./upperNav";
import Detail from './details';
import Inbox from "./inbox";
import ViewMain from "./viewMail";
import { useRouter } from "next/navigation";
import { useEffect, useContext } from "react";
import { messageData } from "../context";
import axios from "axios";
const Outbox = () =>{
    const router =  useRouter();
    let url = "http://localhost:3000/";
    if (typeof window !== "undefined") {
       url = window.location.href;
    }
    const urlParams = new URL(url);
    const token = urlParams.searchParams.get('token');
    const {nav, dark, setDark} = useContext(messageData)!;
    useEffect(()=>{
      if(!token) router.push('/login');
      else{
        localStorage.setItem("token", `Bearer ${token}`);
      }
    },[token]);
    return(
      <div>
        <div className={`${!dark?'bg-white text-black':''} flex overflow-hidden w-full min-h-screen`}>
        <LeftNav/>
        {nav!==5&&<div className="w-full flex justify-center mt-80"><p>Something is comming up! Stay tuned</p></div>}
        {nav===5&&
          <div className="w-full md:grid md:grid-cols-4">
            <div className="col-span-4 h-16"><UpperNav/></div>
            <div className="col-span-1  border-r-2 border-navColor"><Inbox/></div>
            <div className="col-span-2 md:mt-0 mt-24 "><ViewMain/></div>
            <div className="col-span-1  border-l-2 border-upNav"><Detail/></div>
          </div>
        }
        </div>
        </div>
    )
}
export default Outbox;