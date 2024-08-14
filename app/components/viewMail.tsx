import { relation1 } from "../constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState, useEffect } from "react";
import { messageData } from "../context";
import { GetThread, DeleteThread } from "../utils";
const ViewMain = ()=>{
    const contextValue = useContext(messageData);
    const {thread, setThread, dark ,setDark} = contextValue!;
    const [loading, setLoading] = useState(true);
    interface Email {
      toEmail: string;
      subject: string;
      sentAt: string;
      body: string;
      fromEmail:string;
    }
    const ele: Email = {
      toEmail: 'example@example.com',
      subject: 'This is a subject',
      sentAt: '2023-11-21T00:39:19.000Z',
      body: "<p>How are you Shaw?</p>",
      fromEmail: 'sabhinav@example.com',
    };
    const [data, setData] = useState(ele);
    useEffect(() => {
        const fetchTasks = async () => {
            if(thread===-1) return;
            await GetThread(thread).then((res)=>{ if(res.data.data!=undefined) setLoading(false);  setData(res.data.data[0]) }).catch((err)=>console.log(err));
        };
        fetchTasks();
    }, [thread]);
    useEffect(() => {
        const handleKeyPress = async(event: KeyboardEvent) => {
          if (event.key === "d" || event.key === "D") {
            alert("Deleted!");
            await DeleteThread(thread).then(()=>alert("deleted"));
          }
          if (event.key === "r" || event.key === "R") {
            console.log("Pressed R");
          }
        };
        document.addEventListener("keydown", handleKeyPress);
        return () => {
          document.removeEventListener("keydown", handleKeyPress);
        };
    }, [event]);
    return(
        <div className="">
          <div className="xl:flex">
            <div className="p-4">
                <p>{relation1[0]}</p>
                <p className="text-cardText">{relation1[2]}</p>
            </div>
            <div className="w-full flex xl:justify-end mr-2 p-4">
                <button className={`w-32 h-8 ${(dark)?'bg-upNav':'bg-slate-400'} rounded-md`}>
                    Interested
                    <FontAwesomeIcon icon={faAngleDown} className="ml-2"/>
                </button>
                <button className={`w-32 h-8 ${(dark)?'bg-upNav':'bg-slate-400'} ml-4  rounded-md`}>
                    Move
                    <FontAwesomeIcon icon={faAngleDown} className="ml-2"/>
                </button>
                <button className={`w-12 h-8 ${(dark)?'bg-upNav':'bg-slate-400'} ml-4  pb-4  rounded-md`}>
                    ...
                </button>
            </div>
          </div>
          <hr className="h-0 border-b-2 border-upNav"/>
          {(!loading)&&data!=undefined&&<div className={` ml-8 mr-8 ${(loading)?'hidden':''}`}>
            <div className="flex mt-2">
                <hr className="h-0 border-b-2 w-full mt-3 border-upNav"/>
                <span className={`w-20 p-1 pl-2 text-xs ${(dark)?'bg-upNav':'bg-slate-400'} rounded-md`}>Today</span>
                <hr className="h-0 border-b-2 w-full mt-3 border-upNav"/>
            </div>
            <div className={`${(dark)?'bg-upNav':'bg-slate-400'} p-4 rounded-md`}>
                <div className="flex w-full">
                    <p className="w-1/2">{data.subject}</p>
                    <div className="flex w-full justify-end text-cardLine">
                        <span className="text-end">{new Date(data.sentAt).toISOString().split("T")[0]}</span>{" "}: 
                        <span className="text-end ml-2">{new Date(data.sentAt).toTimeString().split(" ")[0]}</span>
                    </div>
                </div>
                <p>from : {data.fromEmail}</p>
                <p>to : {data.toEmail}</p>
                <p>Hi, </p>
                <div dangerouslySetInnerHTML={{ __html: data.body }}/>
            </div>
          </div>}
          <button className="absolute bottom-6 md:w-52 w-36 ml-4 border-blue-700 h-12 rounded-md bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 text-white text-xs md:text-sm">Reply</button>
        </div>
    )
}

export default ViewMain;