const express= require("express");
const cors = require("cors");
const { json } = require("body-parser");
const client = new Client();
client.setProject('67419b4900287acdc7f2');

const corsOptions = {
    origin: '*',
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
// app.get("/",(req,res)=>{
//     res.send(html);
// });

app.listen(5000,()=>{
    console.log("Post at 5000");
});

// const html = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Deploy test</title>
// </head>
// <body>
    
// </body>
// <script>
//     fetch("http://localhost:5000/app", {
//   method: "GET",
// })
// .then(response => response.json())
// .then(data => {
//   const dataContainer = document.createElement('div');
//   dataContainer.textContent = JSON.stringify(data, null, 2);
//   document.body.appendChild(dataContainer);
// })
// .catch(error => console.error('Error:', error));

// </script>
// </html>
// `