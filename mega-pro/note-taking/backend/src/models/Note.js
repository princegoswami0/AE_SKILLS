import mongoose from "mongoose";

//creata the schema and the model based on that schema

const noteSchema = new mongoose.Schema (
  {
    title: {
      type : String,
      required:true
    },
    content:{
      type:String,
      required:true
    }
  },
  {timestamps:true}
);

const Note = mongoose.model("Note",noteSchema);

export default Note