const Router = require("express").Router(); 
var convert = require('convert-units')

Router.get("/:number/:from/:to",(req,res,next)=>{
    let {number,from,to} = req.params
    try{ 
        let result= convert(number).from(from).to(to)
        res.status(200).json({sucess:true,result:result})
        }
    catch(err){
        // res.json({success:false, message:err.message})
        let customerror={status:416,message:err.message}
        next(customerror)
       
    }
   
    
})

Router.get("/",(req,res,next)=>{

    let {number,from,to} = req.query
    try{ 
        let result= convert(number).from(from).to(to)
        res.status(200).json({sucess:true,result:result})
        }
    catch(err){
        // res.json({success:false, message:err.message})
        let customerror={status:416,message:err.message}
        next(customerror)
       
    }
   
    
})

Router.post("/",(req,res,next)=>{
    let {number,from,to}=req.body
    try{ 
        let result= convert(number).from(from).to(to)
        res.status(200).json({sucess:true,result:result})
        }
    catch(err){
        // res.json({success:false, message:err.message})
        let customerror={status:416,message:err.message}
        next(customerror)
       
    }

})



module.exports=Router;
