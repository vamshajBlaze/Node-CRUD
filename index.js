const express = require('express');
const app = express()
const Product = require('./models/product.model.js');
const mongoose = require('mongoose');


app.get('/',(req,res)=>{
res.send("hello this Node Api");
});

app.use(express.json());

app.post('/api/product', async(req,res)=>{
    try{

        const product=await Product.create(req.body);
        res.status(200).json(product)
    }catch(error)
    {
   res.status(500).json({message:error.message});
}
});

app.get('/api/product/:id',async(req,res)=>{
    try{
        const { id } = req.params;
       const prodID= await Product.findById(id);
        res.status(200).json(prodID);
    }
    catch(error){
      res.status(500).json({message:error.message});
    }
});
app.post('/test', (req, res) => {
  res.json({ received: req.body });
});


app.put('/api/product/:id',async(req,res)=>{
    try{
       const { id } = req.params;
       const prodUpdate = await Product. findByIdAndUpdate(id,req.body);

    
    if(!prodUpdate){
     return res.status(404).json({message:"not found !"});
    }

       res.status(200).json(prodUpdate);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
})

app.get('/api/products',async(req,res)=>{
    try{
        const products = await Product.find({});
        res.status(200).json(products);
    } catch(error)
    {
        res.status(500).json({message:error.message});
    }
});
 app.delete('/api/product/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const prodDelete = await Product.findByIdAndDelete(id);
        if(!prodDelete)
        {
            return res.status(404).json({message:error.message});
        }
        res.status(200).json({message:"deleted !"});
    }
    catch(error){
           res.status(500).json({message:error.message});
    }
 })


mongoose.connect("mongodb+srv://vamshaj:Ganesh38@db.lyvxrr0.mongodb.net/DB?retryWrites=true&w=majority&appName=DB").then(()=>{
    console.log('connected to the database');
    app.listen(2000,()=>{
    console.log("running on 2000 ");
});
})
.catch((err) => {
    console.log("Connection failed");
    console.error(err.message);
});
