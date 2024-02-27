import { Placemark } from "./placemark.js";

export const placemarkMongoStore = {
  async getPlacemarksByListId(id) {
    const placemarks = await Placemark.find({ listid: id }).lean();
    return placemarks;
  },

  async getAllPlacemarks() {
    const placemarks = await Placemark.find().lean();
    return placemarks;
  },

  async deleteAllPlacemarks() {
    await Placemark.deleteMany({});
  },

  async addPlacemark(listId, placemark) {
    placemark.listid = listId;
    const newPlacemark = new Placemark(placemark);
    const placemarkObj = await newPlacemark.save();
    return this.getPlacemarkById(placemarkObj._id);
  },

  async getPlacemarkById(id) {
    if (id) {
      const foundPlacemark = await Placemark.findOne({ _id: id }).lean();
      return foundPlacemark;
    }
    return null;
  },

  async deletePlacemark(id) {
    try {
      await Placemark.deleteOne({ _id: id });
    } catch (error) {
      console.log("bad id");
    }
  },


};

