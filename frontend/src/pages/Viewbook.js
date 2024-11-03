import React, { useEffect, useState } from "react";
import Backbutton from "../Component/Backbutton";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Spinner from "../Component/Spinner";


const Viewbook = ()=>{

const { id } = useParams(); 
const [book, setbook] = useState({});
const [loading , setloading] = useState(false);

useEffect(()=>{
    setloading(true)
    axios.get(`http://localhost:8080/book/view/${id}`).then((res)=>{
       setbook(res.data);
       console.log(res.data);
       setloading(false); 
    }).catch((error)=>{
        console.log(error)
        setloading(false);
    })
},[id])



    return (<>
    <Backbutton/>


    <div> {loading ?(<Spinner/>):(<div>
        <h1>{book.Title}</h1>
        <h2>{book.Author}</h2>
        <p>{book.Publishyear}</p>
        <div><Link to={`/book/edit/${book._id}`}>edit</Link></div>
        <div><Link to={`/book/delete/${book._id}`}>delete</Link></div>
        </div>)}</div>
    </>)
}
export default Viewbook;
