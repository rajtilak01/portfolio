import mongoose, { Document, Schema } from "mongoose";

// Define a TypeScript interface for the project schema
export interface IProject extends Document {
  name: string;
  imageUrl?: string[]; // Optional, as it's not required
  description: string;
  deployedUrl?: string; // Optional
  tags?: string[]; // Optional
}

// Define the schema
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

// Export the Mongoose model with the IProject interface
export default mongoose.model<IProject>("Projects", projectSchema);
