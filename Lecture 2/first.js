console.log("krishna apndey")

const fs = require('fs');
fs.writeFile("output.txt","Writing File",(err)=>{
  if(err ) console.log("Error occured");
  else console.log("File written successfully")
})