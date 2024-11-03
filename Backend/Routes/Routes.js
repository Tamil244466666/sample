import express from "express";
import { book } from "../Models/bookmodel.js";
const app = express();
export const router = express.Router();




// post a book
router.post('/', async(req,res)=>{        // storing data is a asynchornize process async and aPublishyearkeyword
    try {
        if(!req.body.Publishyear || !req.body.Author || !req.body.Publishyear){
            return res.status(400).send("erroe")
        }
        else{
            const newbook = {
                Title:req.body.Title,
                Author:req.body.Author,
                Publishyear:req.body.Publishyear
            }
        const createbook = await book.create(newbook)   
        return res.status(200).send({message:'successfully',data:createbook});
    }

    }catch(error){
        return res.status(500).send({message:error.message})
    }
})


// Get all data from the database
router.get('/',async(req,res)=>{
try{
    const allbooks = await book.find();
    return res.status(200).send(allbooks)
}catch(error){
    return res.status(500).send({message:error.message})
}
})

//Get a specfice book
router.get('/view/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const findbook = await book.findById(id);
        return res.status(200).send(findbook);
    }
    catch(error){
        return res.status(500).send({message:error.message})
    }
})

// put the data
router.put('/edit/:id',async(req,res)=>{
    try{
        if(!req.body){
           return res.status(500).send({message:"data is not filled"})
        }
        else{
            const {id} = req.params;

            const finddata = await book.findById(id);
          
            
            const updatedata = { 
                 Title : req.body.Title ? req.body.Title : finddata.Title,
                 Author : req.body.Author ? req.body.Author : finddata.Author,
                 Publishyear : req.body.Publishyear ? req.body.Publishyear : finddata.Publishyear,
            }
            const updated = await book.findByIdAndUpdate(id,updatedata);
            return res.status(200).send(updated)
        }

    }catch(error){
        return res.status(500).send({message : error.message})
    }
})


// delete a data 
router.delete('/delete/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const deleted = await book.findByIdAndDelete(id);
    
        return  !deleted ? res.status(404).send({message:"data not found"}) : res.status(200).send({message :"successfully deleted"})
    }
    catch(error){
        return res.status(404).send({message:error.message})
    }
})
