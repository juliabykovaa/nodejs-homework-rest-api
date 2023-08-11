import { Schema, model } from "mongoose";
import { handleSaveError, validateAtUpdate } from "./hooks.js";

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  favorite: {
    type: Boolean,
    default: false,
  }
});

contactSchema.pre("findOneAndUpdate", validateAtUpdate)

contactSchema.post("save", handleSaveError);
contactSchema.post("findOneAndUpdate", handleSaveError);


const Contact = model("contact", contactSchema);
export default Contact;
