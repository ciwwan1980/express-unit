const Router = require("express").Router(); 
var convert = require('convert-units')

Router.get("/:temerature/:from/:to",(req,res,next)=>{
    let {temerature,from,to} = req.params
    try{ 
        let result= convert(temerature).from(from).to(to)
        res.status(200).json({sucess:true,result:result})
        }
    catch(err){
        // res.json({success:false, message:err.message})
        let customerror={status:416,message:err.message}
        next(customerror)
       
    }
   
    
})



module.exports=Router;