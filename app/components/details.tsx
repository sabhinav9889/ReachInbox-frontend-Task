import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPaperPlane, faEnvelopeOpen} from "@fortawesome/free-solid-svg-icons";
import { entity1, relation1 } from "../constant";
import {useContext} from 'react';
import { messageData } from "../context";
const Detail = ()=>{
    const {dark} = useContext(messageData)!;
    return(
        <div className="">
            <div className="p-2">
                <p className={`font-semibold text-white p-2 pl-4 rounded-xl ${(dark)?'bg-upNav':'bg-slate-400'} mb-4`}>Lead Details</p>   
                {
                entity1.map((ele, idx)=>(
                    <div className="p-2 md:flex text-sm" key={idx}>
                        <div className="w-full justify-start"><p>{ele}</p></div>
                        <div className="w-full flex justify-end text-cardLine"><p>{relation1[idx]}</p></div>
                    </div>
                ))
                }
            </div>
            <div className="p-2">
                <p className={`font-semibold text-white p-2 pl-4 rounded-xl ${(dark)?'bg-upNav':'bg-slate-400'}`}>Activities</p>
                <p className="p-2 pt-6 pb-6 font-semibold">Campign Name</p>
                <div className="pl-2">3 Steps | 5 Days in Sequence</div>
                <div className="ml-4">
                <div className="flex w-full mt-2 text-xs h-10">
                    <div className={`${(dark)?'bg-upNav':'bg-slate-400'} rounded-full w-8 h-8 mt-1`}>
                        <FontAwesomeIcon icon={faEnvelope} className="ml-2 mt-2 text-sm cursor-pointer"/>
                    </div> 
                    <div className="ml-8 ">
                        <p className="">Step 1: Email</p>
                        <div className=" text-cardLine"><FontAwesomeIcon icon={faPaperPlane} className="mt-2"/> Sent 3rd, Feb</div>
                    </div>
                </div>
                <div className="border-l-2 border-upNav h-10 mx-4"></div>
                <div className="flex w-full text-xs h-10">
                    <div className={`${(dark)?'bg-upNav':'bg-slate-400'} rounded-full w-8 h-8 mt-1`}>
                        <FontAwesomeIcon icon={faEnvelope} className="ml-2 mt-2 text-sm cursor-pointer"/>
                    </div> 
                    <div className="ml-8">
                        <p className="">Step 2: Email</p>
                        <div className="text-cardLine"><FontAwesomeIcon icon={faEnvelopeOpen} className="mt-2 text-yellow-400"/> Opened 3rd, Jan</div>
                    </div>
                </div>
                <div className="border-l-2 border-upNav h-10 mx-4"></div>
                <div className="flex w-full text-xs h-10">
                    <div className={`${(dark)?'bg-upNav':'bg-slate-400'} rounded-full w-8 h-8 mt-1`}>
                        <FontAwesomeIcon icon={faEnvelope} className="ml-2 mt-2 text-sm cursor-pointer"/>
                    </div> 
                    <div className="ml-8">
                        <p className="">Step 3: Email</p>
                        <div className="text-cardLine"><FontAwesomeIcon icon={faEnvelopeOpen} className="mt-2 text-yellow-400"/> Opened 5th, Dec</div>
                    </div>
                </div>
            </div>
                </div>
        </div>
    )
}

export default Detail;