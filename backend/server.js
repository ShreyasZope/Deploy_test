const express= require("express");
const cors = require("cors");
const { json } = require("body-parser");

const corsOptions = {
    origin: 'http://localhost:5050',
    optionsSuccessStatus: 200
  };
app=express();
app.use(json());
app.use(cors(corsOptions));

const data={
    "Fruit":"Mango",
    "Digit":7,
    "Colour":"red"
};
app.get("/app",(req,res)=>{
    res.json(data);
});

app.listen(5000,()=>{
    console.log("Post at 5000");
});
