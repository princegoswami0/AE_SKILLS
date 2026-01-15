import express from "express";
import { createNote, deleteNote, getAllNotes, updateNote } from "../controllers/notescontroller.js";

const router = express.Router();

router.get("/", getAllNotes);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

// router.delete("/:id", (req,res)=>{
//   res.status(200).json({message:"Note Deleted Successfully"});
// });

export default router;