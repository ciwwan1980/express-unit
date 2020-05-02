const Router = require("express").Router(); 


Router.get("/:number/:from/:to",(req,res,next)=>{
    res.send(req.params)
})





module.exports=Router;