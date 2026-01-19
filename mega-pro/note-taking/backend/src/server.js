import dotenv from "dotenv";

dotenv.config();

import express from "express";
import notesRoute from "./Routes/notesRoute.js"
import { connectDb } from "./config/db.js";
import rateLimiter from "./middlewares/rateLimiter.js";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 3001 ;


//middleware
app.use( cors({
  origin:"http://localhost:5173",
})
)
app.use(express.json());
app.use(rateLimiter);

//our simple custom middlewares 

// app.use((req,res,next)=>{
//   console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
// });

app.use("/api/notes", notesRoute);
// app.use("/api/product", productRoutes);


connectDb().then(()=>{
  app.listen(PORT, () => {
  console.log("Server is running on :", PORT);
  });
});



