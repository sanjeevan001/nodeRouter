const express = require('express')

 const Task=require('../models/models')

const router = express.Router()


// router.get('/', function(req, res){
//     res.send("Hello World!");
//  });

// router.get('/:id', function(req, res){
//     res.send(req.params.id);
//  });

router.get('/', function(req, res){
 
    const  task=new Task ({
        todo:'make sanjeelunch',
        iscomplete:false,
    })
    task.save((err,doc)=>{
        if(err)console.log(err)
        console.log(doc)
    
    
    })
    
    });


    

 module.exports=router