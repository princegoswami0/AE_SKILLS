import express from "express";
import { createNote, deleteNote, getAllNotes, getNoteById, updateNote } from "../controllers/notescontroller.js";

const router = express.Router();

router.get("/", getAllNotes);
router.post("/", createNote);
router.put("/:id", updateNote);
router.get("/:id", getNoteById);
router.delete("/:id", deleteNote);

// router.delete("/:id", (req,res)=>{
//   res.status(200).json({message:"Note Deleted Successfully"});
// });

export default router;