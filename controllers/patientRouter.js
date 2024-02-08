const express=require("express")
const patientModel=require("../models/patientModel")
const router=express.Router()

router.post("/add",async(req,res)=>{
let data=req.body
let patients=new patientModel(data)
let result=await patients.save()
res.json({

    "status":"success"
})

})


router.get( "/viewall",async(req,res)=>{
    let data=await patientModel.find()
res.json(data)

})

router.post("/search",async(req,res)=>{
    let input=req.body
let data=await patientModel.find(input)
res.json(data)
})

module.exports=router