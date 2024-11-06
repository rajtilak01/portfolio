import mongoose, { Document, Schema } from "mongoose";

export interface IProject extends Document {
  name: string;
  imageUrl?: string[];
  description: string;
  deployedUrl?: string; 
  tags?: string[];
}

const projectSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  deployedUrl: {
    type: String,
  },
  tags: [
    {
      type: String,
    },
  ],
});


const Project = mongoose.models.Project || mongoose.model<IProject>("Project", projectSchema);

export default Project
