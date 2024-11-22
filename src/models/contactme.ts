import mongoose, { Schema } from "mongoose";

export interface IProject extends Document {
  name: string;
  email: string;
  description: string;
}

const contactMeSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const ContactMe = mongoose.models.ContactMe || mongoose.model<IProject>("ContactMe", contactMeSchema);

export default ContactMe