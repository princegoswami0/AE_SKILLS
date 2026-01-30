const requestHandler = (req,res)=>{
  console.log(req.url,req.method);
};

module.exports = requestHandler;