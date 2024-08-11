const express=require('express');
const app=express();
require("./config/connect")

app.use(express.json());

const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log("server is running on port "+ PORT)
})