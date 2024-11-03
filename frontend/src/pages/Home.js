import React from "react";
import axios from 'axios';
import Spinner from "../Component/Spinner";
import {Link } from "react-router-dom";
import { useState,useEffect } from "react";
const Home = ()=>{
    const [book,setbook] = useState([]);
    const [loading ,setloading] = useState(false);

    useEffect(()=>{
        setloading(true);
        axios.get('http://localhost:8080/book')
        .then((response)=>
            { 
                console.log(response.data);
                setbook(response.data);
                setloading(false);

            })
            .catch((error)=>{
            console.log(error);
            setloading(false);
        })
    },[])
    return (<>
    <div>
        <div className="flexdiv">
            <h1>Book list</h1>
            <Link to='/book/create'>addbox</Link>
        </div>
        {
            loading ?(<Spinner/>): (<table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Published year</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                 {book.map((data,index)=>{
                    return (<tr key={data._id}>
                        <td>{index +1}</td>
                        <td>{data.Title}</td>
                        <td>{data.Author}</td>
                        <td>{data.Publishyear}</td>
                       
                        <td>
                            <div>
                                <Link to={`/book/detail/${data._id}`}>view</Link>
                                <Link to={`/book/edit/${data._id}`}>edit</Link>
                                <Link to={`/book/delete/${data._id}`}>delete</Link>
                            </div>
                        </td>
                        <td>{new Date(data.updatedAt).toString()}</td>
                    </tr>)
                 })}  
                </tbody>
                </table>)
        }
    </div>
    </>)
}
export default Home;