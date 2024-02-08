const mongoose=require("mongoose")
const patientSchema=new mongoose.Schema({

 patientName:String,
 phone:String,
 Address:String,
 symptom:String
 })

module.exports=mongoose.model("covid",patientSchema)