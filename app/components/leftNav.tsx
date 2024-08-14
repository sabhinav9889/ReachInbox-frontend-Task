"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link"
import { IconList, NavHref } from "../constant";
import { messageData } from "../context";
import { useContext } from "react";
const LeftNav = ()=>{
    const contextValue  = useContext(messageData);
    const {nav, setNav, dark, setDark}  = contextValue!;
    return(
        <div className={`min-h-screen w-16 ${(dark)?'bg-navColor':'bg-slate-300'}`}>
            <div className="pl-3 pr-3 pt-4">
                <Image src="/images.jpeg" width={32} height={32} alt="logo" className=""></Image>
            </div>
            <nav className="mt-16">
                {IconList.map((ele,idx)=>(
                    <Link href={`${NavHref[idx]}`} key={idx} className={`block p-3`} onClick={()=>setNav(idx)}>
                        <div className={`w-6 h-6 rounded-full absolute ml-4 -mt-4 p-1 text-xs ${(idx===IconList.length-2)?' bg-red-500':'hidden'}`}>12+</div>
                        <div className={`w-9 h-8 rounded-sm flex pt-1 justify-center ${(idx===nav)?' bg-red-900':''}`} >
                          <FontAwesomeIcon icon={ele} size="lg"/> 
                        </div>
                    </Link>
                ))}
            </nav>
            <div className="w-14 flex justify-center absolute bottom-4 left-0">
                <div className="bg-red-800 w-10 h-10 rounded-full p-2 text-center">
                    AS
                </div>
            </div>
        </div>
    )
}

export default LeftNav;