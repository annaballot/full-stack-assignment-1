import Mongoose from "mongoose";

const { Schema } = Mongoose;

const attractionSchema = new Schema({
  name: String,
  category: String,
  description: String,
  latitude: Number,
  longitude: Number,
  listid: {
    type: Schema.Types.ObjectId,
    ref: "List",
  },
});

export const Attraction = Mongoose.model("Attraction", attractionSchema);
