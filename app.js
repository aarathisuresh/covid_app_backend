const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const router = require("./controllers/patientRouter")



const app=express()

app.use(express.json())
app.use(cors())
app.use("/api/patient_entry",router)

mongoose.connect("mongodb+srv://Aarathisuresh:Aarathi93@cluster0.qwgeh7q.mongodb.net/covidDb?retryWrites=true&w=majority",{useNewUrlParser:true})

app.listen(3002,()=>{

console.log("server running ...")

})