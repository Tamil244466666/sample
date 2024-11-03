import React, { useEffect, useState } from "react";
import Backbutton from "../Component/Backbutton";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../Component/Spinner";

const Editbook = ()=>
    {
    const [editbook , seteditbook] = useState({});
    const [loading , setloading] = useState(false)
    const navigetback = useNavigate();
    const {id} = useParams();

    useEffect(()=>
        {
        axios.get(`http://localhost:8080/book/view/${id}`)
        .then((res)=>{
            setloading(true);
            seteditbook(res.data);
            setloading(false);
        }).catch((error)=>{console.log(error)})
    },[id])
 
    const editfn = (e)=>{
        const inputname = e.target.name;
        const editdata = {
            ...editbook
        };
        editdata[`${inputname}`] = e.target.value;
        seteditbook(editdata)
        console.log(editbook)
    }

    const backendeditfn = ()=>{
        axios.put(`http://localhost:8080/book/edit/${id}`,editbook)
        .then((res)=>{console.log(res.data);navigetback('/')})
        .catch((error)=>{
            console.log(error)
        })
    }



return(<>
    <Backbutton/>
    Editbook

  { loading? (<Spinner/>): (<div>
        <input type="text" name="Title" onChange={editfn} value={editbook.Title}/>
        <input type="text" name="Author" onChange={editfn} value={editbook.Author}/>
        <input type="number" name="Publishyear" onChange={editfn} value={editbook.Publishyear}/>
        <button onClick={backendeditfn}>Save</button>
    </div>)}
    </>)

}
export default Editbook;