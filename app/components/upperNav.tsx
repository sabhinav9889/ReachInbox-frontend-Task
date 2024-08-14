import { useState, useContext } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { messageData } from "../context";
const UpperNav = ()=>{
    const contextValue = useContext(messageData);
    const {dark, setDark} = contextValue!;
    return(
        <nav className={`h-16 w-full flex p-4 ${dark?'bg-upNav':'bg-slate-400'}`}>
            <span className={`font-semibold ml-2 mt-1`}>Onebox</span>
            <div className={` absolute  md:right-48 right-36 w-16 h-7 rounded-full border flex border-cardLine ${(dark)?'bg-upNav':'bg-white'} cursor-pointer`} onClick={()=>setDark((prev)=>(prev)?false:true)}>
               {(!dark)&&<FontAwesomeIcon icon={faMoon} className="mt-0.5 ml-2 text-black text-lg"/>}
               <div className={`bg-cardLine rounded-full mt-0.5 w-5 h-5 ${(!dark)?'translate-x-4':'translate-x-1'} duration-300 ease-in-out`}>
               </div>
               {(dark)&&<FontAwesomeIcon icon={faSun} className="ml-4 mt-0.5 text-lg text-orange-300"/>}
            </div>
            <button className="absolute right-4 text-xs">
                Tim's Workspace
                <FontAwesomeIcon icon={faAngleDown} className="ml-2"/>
            </button>
        </nav>
    )
}

export default UpperNav;