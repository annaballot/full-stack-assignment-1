import Mongoose from "mongoose";

const { Schema } = Mongoose;

const attractionSchema = new Schema({
  title: String,
  artist: String,
  duration: Number,
  listid: {
    type: Schema.Types.ObjectId,
    ref: "List",
  },
});

export const Attraction = Mongoose.model("Attraction", attractionSchema);
