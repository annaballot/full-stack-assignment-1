import { Attraction } from "./attraction.js";

export const attractionMongoStore = {
  async getAttractionsByListId(id) {
    const attractions = await Attraction.find({ listid: id }).lean();
    return attractions;
  },
};
