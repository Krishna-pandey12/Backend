// const sumRequestHandler=(req,res)=>{
//   console.log("In some Request Handler",req.url);
//   const body=[];
//   req.on('data',chunk=>body.push(chunk));
//   req.on('end',()=>{
//     const bodyStr=Buffer.concat(body).toString();
//     const params=new URLSearchParams(bodyStr);
//     const bodyObj=Object.fromEntries(params);
//     const result=Number(bodyObj.first)+Number(bodyObj.second);
//     // console.log(result)
//     //  res.setHeader("Content-Type", "text/html");

//         res.write(`
//         <html>
//         <body>
//             <h1>Result = ${result}</h1>
//             <a href="/calculator">Back</a>
//         </body>
//         </html>
//         `);
//     return res.end();
//   });
// };
// exports.sumRequestHandler=sumRequestHandler;


const sumRequestHandler = (req, res) => {
  console.log("In Sum Request Handler", req.url);
  const body = [];
  req.on('data', chunk => body.push(chunk));
  req.on('end', () => {
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);
    const result = Number(bodyObj.first) + Number(bodyObj.second);
    console.log(result);
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <head><title>Practise Set</title></head>
        <body>
          <h1>Your Sum is ${result}</h1>
        </body>  
      <html>  
    `); 
    return res.end();
  });  
}

exports.sumRequestHandler = sumRequestHandler;