import { Attraction } from "./attraction.js";

export const attractionMongoStore = {
  async getAttractionsByListId(id) {
    const attractions = await Attraction.find({ listid: id }).lean();
    return attractions;
  },

  async getAllAttractions() {
    const attractions = await Attraction.find().lean();
    return attractions;
  },

  async deleteAllAttractions() {
    await Attraction.deleteMany({});
  },

  async addAttraction(listId, attraction) {
    attraction.listid = listId;
    const newCategory = new Category(category);
    const attractionObj = await newAttraction.save();
    const newAttraction = new Attraction(attraction);
    const attractionObj = await newAttraction.save();
    return this.getAttractionById(attractionObj._id);
  },

  async getAttractionById(id) {
    if (id) {
      const foundAttraction = await Attraction.findOne({ _id: id }).lean();
      return foundAttraction;
    }
    return null;
  },

  async deleteAttraction(id) {
    try {
      await Attraction.deleteOne({ _id: id });
    } catch (error) {
      console.log("bad id");
    }
  },


  //Maybe add one for adding a category (array) 
  // doc.tags.push('web development');
  // https://masteringjs.io/tutorials/mongoose/array


};

