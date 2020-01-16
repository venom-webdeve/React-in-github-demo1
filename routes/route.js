const express=require('express');
const router=express.Router();
const Contact= require('../models/contacts');


//adding retrieving method
router.get('/contacts',(req, res, next)=>{
    Contact.find(function(err, contacts){
          res.json(contacts);
    })
//res.send("Retrieving the contact list");
});

//add contact to post method 
router.post('/contact',(req, res, next)=>{
     let newContact=new Contact({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        phone:req.body.phone 
     });

     newContact.save((err, contact)=>{
          if(err){
              res.json({msg:'failed to add contact'});
          }else
          {
            res.json({msg:'Contacts added successfully'}); 
          }

     });
});


//delete the contact method added

router.delete('/contact/:id',(req, res, next)=>{
Contact.remove({_id:req.params.id},function(err, result){

 if(err){
    res.json(err);

 }else{
     res.json(result);
 }

});

});

module.exports=router;