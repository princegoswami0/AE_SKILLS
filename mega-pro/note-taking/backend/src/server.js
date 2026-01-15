import dotenv from "dotenv";

dotenv.config();

import express from "express";
import notesRoute from "./Routes/notesRoute.js"
import { connectDb } from "./config/db.js";

const app = express();

const PORT = process.env.PORT || 3001 ;

connectDb();
//middleware
app.use(express.json());

app.use("/api/notes", notesRoute);
// app.use("/api/product", productRoutes);

app.listen(PORT, () => {
  console.log("Server is running on :", PORT);
});

