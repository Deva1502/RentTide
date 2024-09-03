import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'


const app = express();
//to make input as json
app.use(express.json());
app.use(cors());
app.use(express.static("public"));//jitna bhi static  file rahega vo public file me rahega

app.listen(3000,(err)=>{
    console.log("server is running on port 3000");
    
})