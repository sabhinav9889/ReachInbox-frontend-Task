import axios from "axios";
import { threadId } from "worker_threads";

const GetList = async()=>{
        const token = localStorage.getItem("token");
        return await axios.get(
            "https://hiring.reachinbox.xyz/api/v1/onebox/list",
            {
            headers: {
                Authorization: token,
            },
            }
        );
}

const GetThread = async(thread:number)=>{
    const token = localStorage.getItem("token");
        return await axios.get(
            `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${thread}`,
            {
            headers: {
                Authorization: token,
            },
            }
        );
}

const DeleteThread = async(thread:number)=>{
    const token = localStorage.getItem("token");
        return await axios.delete(
            `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${thread}`,
            {
            headers: {
                Authorization: token,
            },
            }
        );
}
export {GetList, GetThread, DeleteThread};