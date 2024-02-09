import { v4 } from "uuid";

let attractions = [];

export const attractionMemStore = {
  async getAllAttractions() {
    return attractions;
  },

  async addAttraction(listId, attraction) {
    attraction._id = v4();
    attraction.listid = listId;
    attractions.push(attraction);
    return attraction;
  },

  async getAttractionsByListId(id) {
    let foundAttractions = attractions.filter((attraction) => attraction.listid === id);
    if (!foundAttractions) {
      foundAttractions = null;
    }
    return foundAttractions;
  },

  async getAttractionById(id) {
    let foundAttraction = attractions.find((attraction) => attraction._id === id);
    if (!foundAttraction) {
      foundAttraction = null;
    }
    return foundAttraction;
  },

  async getListAttractions(listId) {
    let foundAttractions = attractions.filter((attraction) => attraction.listid === listId);
    if (!foundAttractions) {
      foundAttractions = null;
    }
    return foundAttractions;
  },

  async deleteAttraction(id) {
    const index = attractions.findIndex((attraction) => attraction._id === id);
    if (index !== -1) attractions.splice(index, 1);
  },

  async deleteAllAttractions() {
    attractions = [];
  },

  async updateAttraction(attraction, updatedAttraction) {
    attraction.name = updatedAttraction.name;
    attraction.description = updatedAttraction.description;
    attraction.category = updatedAttraction.category;
    attraction.latitude = updatedAttraction.latitude;
    attraction.longitude = updatedAttraction.longitude;
  },
};
