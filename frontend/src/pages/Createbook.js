import React, { useState } from "react";
import Backbutton from "../Component/Backbutton";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Createbook = ()=>{
    const [newbook,setnewbook] = useState({Title:'',Author:'',Publishyear:1000});
    const navigetback = useNavigate()
    
    const bookstate=(e)=>{
        const name1 = e.target.name;
        const book = {
            ...newbook
        }
        book[`${name1}`] = e.target.value;
        console.log(book)
        setnewbook(book)
    }

    const bookcreatefn = ()=>{
        axios.post('http://localhost:8080/book/',newbook).then((res)=>{ console.log(res.data);navigetback('/')}).catch((error)=>{console.log(error)})
    }

    return (<>

    <Backbutton/>
    <div>
        <input type="text" onChange={bookstate} name="Title" />
        <input type="text" onChange={bookstate} name="Author" />
        <input type="number" onChange={bookstate} name="Publishyear" />
        <button onClick={bookcreatefn}>submit</button>
    </div>
    {newbook.Title}
    </>)
}
export default Createbook;