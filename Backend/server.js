import express from 'express';
import {PORT,mongoDBURL}  from './config.js';
import { router } from './Routes/Routes.js';
import mongoose from 'mongoose';
import cors  from 'cors';    // this cors library prmitte the req from the front for a data 
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
// app.use(cors({
//     origin:'http://localhost:3000',
//     methods:['GET','POST','PUT','DELETE'],
//     allowedHeaders:['content-type']
// }))
app.use( '/book',router);

//DB connection
mongoose.connect(mongoDBURL)
.then(()=>
    {
    console.log('DB is connect');
    app.listen(PORT,()=>{console.log(`server is on port ${PORT}`)})
})
.catch((err)=>{
    console.log(err)
})



