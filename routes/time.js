const Router = require("express").Router(); 
var convert = require('convert-units')

Router.get("/:number/:from/:to",(req,res,next)=>{
    let {number,from,to} = req.params
    try{ 
        let result= convert(number).from(from).to(to)
        res.status(200).json({sucess:true,result:result})
        }
    catch(err){
        res.json({success:false, message:err.message})
       
    }
   
    
})





module.exports=Router;
