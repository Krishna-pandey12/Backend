const http=require('http');


const server =http.createServer((req,res)=>{
  console.log(req.url,req.method,req.headers);
  // process.exit();
  if(req.url==='/'){
    res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Welcome to Home</h1></body>');
  res.write('</html>');
  return res.end();

  }
  else if(req.url==='/products'){
    res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>checkout out our products</h1></body>');
  res.write('</html>');
  return res.end();
  }
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Welcome to complete coding</h1></body>');
  res.write('</html>');
  res.end();
});
const PORT=3001;
server.listen(PORT,()=>{
  console.log(`Server running at http://localhost:${PORT}`)
});