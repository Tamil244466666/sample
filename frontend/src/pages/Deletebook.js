import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Backbutton from "../Component/Backbutton";
import Spinner from "../Component/Spinner";

const Deletebook = ()=>{
    const navigetback = useNavigate()
const [loading,setloading] = useState(false);
const {id} = useParams();

const  handdeletefn = ()=>{
    setloading(true)
     axios.delete(`http://localhost:8080/book/delete/${id}`)
     .then(()=>{console.log('successfully deleted');
        setloading(false);
        navigetback('/')

     })
     .catch((error)=>{console.log(error);
        setloading(false);
     })
}

return (<>
    <div>

        { loading ? (<Spinner/>) : (<div><h1>are you sure do you want to delete</h1>
        <button onClick={handdeletefn}>yes</button>
        <button ><Backbutton/></button></div>) }
    </div>
    </>)
}
export default Deletebook;