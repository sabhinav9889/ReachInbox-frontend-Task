import { useEffect, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faRefresh,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { GetList } from "../utils";
import { messageData } from "../context";
const Inbox = () => {
  interface Email {
    toEmail: string;
    subject: string;
  }
  const ele: Email = {
    toEmail: 'example@example.com',
    subject: 'This is a subject',
  };
  const contextValue  = useContext(messageData);
  const {thread, setThread, dark, setDark} = contextValue!;
  const [data, setData] = useState([ele]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchTasks = async () => {
       await GetList().then((res)=>{setLoading(false); setData(res.data.data)}).catch((err)=>console.log(err));
    };
    fetchTasks();
  }, [thread]);
  const date = "Mar 7";
  return (
    <div className={`${loading?'hidden':''}`}>
      <div className="flex pl-4 pr-4">
        <p className="flex pl-4 pr-1 text-blue-500 font-semibold text-lg w-1/2">
          All Inbox(s)
          <FontAwesomeIcon icon={faAngleDown} className="pt-1 pl-2" />
        </p>
        <div className="flex justify-end float-right w-1/2 mr-2">
          <span className={`w-8 h-8 p-2 cursor-pointer ${(dark)?'bg-upNav':'bg-slate-400'} rounded-md text-xs`}>
            <FontAwesomeIcon icon={faRefresh} />
          </span>
        </div>
      </div>
      <div className="flex pl-7 pr-4 pt-2">
        25/25 <p className="text-cardLine ml-1">Inbox selected</p>
      </div>
      <div className="ml-6 mr-6">
        <input
          type="text"
          placeholder="Search"
          className={`w-full h-8 mt-4 p-4 rounded-md ${(dark)?'bg-upNav':'bg-slate-400 placeholder-black'}`}
        />
      </div>
      <div className="flex">
        <div className="w-1/2 flex p-2 ml-4">
          <div className={`w-8 h-8 ${(dark)?'bg-upNav text-blue-500':'bg-slate-400 text-black'} rounded-lg p-1 pl-2 text-sm`}>
            26
          </div>{" "}
          <p className="p-1 ml-2">New Replies</p>
        </div>
        <div className="w-1/2 flex justify-end mr-4 p-3">
          <p className="flex">
            Newest
            <FontAwesomeIcon icon={faAngleDown} className="pt-1 pl-2" />
          </p>
        </div>
      </div>
      <hr className={`border-upNav border-b-2 h-0 ml-5 mr-5 `}/>
      <div  className="overflow-y-auto w-full h-128">
      {(!loading)&&data.map((ele:any,idx:any)=>(
        <div className="ml-5 mr-5 cursor-pointer" key={idx} onClick={()=>setThread(ele.threadId)}>
        <div className="flex p-1">
          <div className="w-3 h-3 mt-1 bg-blue-700 rounded-full"></div>
          <p className="w-2/3 pl-3 pr-4">{ele.toEmail}</p>
          <span className="w-1/3 text-end pl-4 pr-4 text-cardText">{date}</span>
        </div>
        <p className="pl-4 pr-4 h-6 overflow-hidden text-cardLine">{ele.subject}</p>
        <div className="flex h-10">
          <div className={`flex justify-center pt-1.5 mt-2 border rounded-3xl h-7 w-1/2 ${(dark)?'bg-upNav':'bg-slate-400'}`}>
            <div className="w-3 h-3 bg-orange-300 text-orange-300 rounded-full"></div>
            <p className="ml-2 text-xs">Interested</p>
          </div>
          <div className={`flex justify-center pt-1.5 mt-2 border rounded-3xl h-7 w-1/2 ${(dark)?'bg-upNav':'bg-slate-400'} text-xs ml-2`}>
            <FontAwesomeIcon icon={faPaperPlane} />{" "}
            <p className="ml-1">Campaign Name</p>
          </div>
        </div>
       </div>
      ))}
       </div>
    </div>
  );
};

export default Inbox;