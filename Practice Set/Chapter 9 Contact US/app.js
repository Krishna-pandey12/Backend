const bodyParser = require('body-parser');
const express=require('express');
const app=express();

app.use((req,res,next)=>{
  console.log("FIrst Dummy Middleware",req.url,req.method);
  next();
});
app.use((req,res,next)=>{
  console.log("Second Dummy Middleware",req.url,req.method);
  next();
});

// app.use((req,res,next)=>{
//   console.log("Third Middleware",req.url,req.method);
//   res.send("<h1>Krishna</h1>");
// })
app.get("/",(req,res,next)=>{
  console.log("Handling / for GET",req.url,req.method);
  res.send(`<h1>Welcome to Complete Coding</h1>`);
})
app.get("/contact-us",(req,res,next)=>{
  console.log("Handling / for GET",req.url,req.method);
  res.send(`<h1>Please give me your details </h1>
    <form action="/contact-us" method="POST">
    <input type="text" name="name" placeholder="Enter Your Name"/>
    <input type="email" name="email" placeholder="Enter Your Email"/>
    <input type="Submit"/>
    </form>`);
});
app.post("/contact-us",(req,res,next)=>{
  console.log("First Handling",req.url,req.method,req.body);
  next();
  // res.send(`<h1> We Will Contact you Soon</h1>`);
});
app.use(bodyParser.urlencoded());
app.post("/contact-us",(req,res,next)=>{
  console.log("Handling /contact-us for POST",req.url,req.method,req.body);
  res.send(`<h1> We Will Contact you Soon</h1>`);
});
const PORT=3000;
app.listen(PORT,()=>{
  console.log(`Server running on address http://localhost:${PORT}`);
})