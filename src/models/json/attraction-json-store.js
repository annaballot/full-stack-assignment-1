import { v4 } from "uuid";
import { db } from "./store-utils.js";

export const attractionJsonStore = {
  async getAllAttractions() {
    await db.read();
    return db.data.attractions;
  },

  async addAttraction(listId, attraction) {
    await db.read();
    attraction._id = v4();
    attraction.listid = listId;
    db.data.attractions.push(attraction);
    await db.write();
    return attraction;
  },

  async getAttractionsByListId(id) {
    await db.read();
    let foundAttractions = db.data.attractions.filter((attraction) => attraction.listid === id);
    if (!foundAttractions) {
      foundAttractions = null;
    }
    return foundAttractions;
  },

  async getAttractionById(id) {
    await db.read();
    let foundAttraction = db.data.attractions.find((attraction) => attraction._id === id);
    if (!foundAttraction) {
      foundAttraction = null;
    }
    return foundAttraction;
  },

  async getListAttractions(listId) {
    await db.read();
    let foundAttractions = attractions.filter((attraction) => attraction.listid === listId);
    if (!foundAttractions) {
      foundAttractions = null;
    }
    return foundAttractions;
  },

  async deleteAttraction(id) {
    await db.read();
    const index = db.data.attractions.findIndex((attraction) => attraction._id === id);
    if (index !== -1) db.data.attractions.splice(index, 1);
    await db.write();
  },

  async deleteAllAttractions() {
    db.data.attractions = [];
    await db.write();
  },

  async updateAttraction(attraction, updatedAttraction) {
    attraction.name = updatedAttraction.name;
    attraction.category = updatedAttraction.category;
    attraction.description = updatedAttraction.description;
    attraction.latitude = updatedAttraction.latitude;
    attraction.longitude = updatedAttraction.longitude;
    await db.write();
  },
};