const express=require("express");
const app=express();
const port=3000;
const path=require("path");
require("./db");

console.log(path.join(__dirname,))
const add=path.join(__dirname,);
app.use(express.static(add));

const Register=require("./structure");
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post("/structure",async(req,res)=>{
    try
    {
        const review=new Register({
            Name:req.body.Name,
            Roll:req.body.Roll,
            Review:req.body.Review
        })
        const output=await review.save();
        res.status(201).render(index);
    }
    catch(error)
    {
        res.status(404).send(error);
    }

})

app.listen(port,()=>{
    console.log(`connected at ${port}`);
})
