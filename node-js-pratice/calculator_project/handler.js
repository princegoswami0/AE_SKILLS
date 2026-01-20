const requestHandler = (req,res)=>{
  console.log(req.url,req.method);
  res.end()
};

module.exports = requestHandler;