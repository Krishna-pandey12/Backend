const path =require('path');

const express=require("express");

const userROuter=require("./routes/userRouter")
const hostRouter=require("./routes/hostRouter");

const app=express();


app.use(express.urlencoded());
app.use(userROuter);
app.use("/host",hostRouter);

app.use((req,res,next)=>{
     res.status(404).sendFile(path.join(__dirname,'../','views','404.html'));
})
const PORT=3000;
app.listen(PORT,()=>{
  console.log(`Server running on address http://localhost:${PORT}`);
});