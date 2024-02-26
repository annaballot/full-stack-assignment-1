import Mongoose from "mongoose";
import { Category } from "./category.js";

const { Schema } = Mongoose;

const attractionSchema = new Schema({
  name: String,
  // category: { type: String, enum: ['Beach', 'Coastal Walk', 'Sauna', 'Surf Spot', 'Diving'] },
  // category: String,
  category: [{ type: Schema.Types.ObjectId, ref: "Category" }],
  description: String,
  latitude: Number,
  longitude: Number,
  listid: {
    type: Schema.Types.ObjectId,
    ref: "List",
  },
});

export const Attraction = Mongoose.model("Attraction", attractionSchema);
