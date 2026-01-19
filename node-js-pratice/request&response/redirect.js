const http = require("http");
const fs =require ( "fs");


 const server = http.createServer((req,res)=> {
  console.log(req, res)

  if(req.url==="/women"){
    res.write("<h1>welcome to the men section</h1>");
    return res.end();
  }else if(req.url==="/baby"){
    res.write("<h1>welcome to the men cart</h1>");
    return res.end();
  }
  res.write(
    `
    <html lang="en">
    <head>
    <title>Myntra header</title>
    </head>
    <body>
    <h2>MYNTRA header</h2>
    <head>
    <nav><ul>
    <li><a href="/baby">bay</a></li>
    <li><a href="/women">women</a></li>
    <li>baby</li>
    <li href="/cart">cart</li>
    </ul></nav>
    </head>
    </body>
    </html>
    `
  )
  res.end()

});

const PORT = 3000;
server.listen(PORT,()=>{
  console.log(`Server is listening on address on http://localhost:${PORT}`)
});