import { v4 } from "uuid";
import { attractionMemStore } from "./attraction-mem-store.js";

let lists = [];

export const listMemStore = {
  async getAllLists() {
    return lists;
  },

  async addList(list) {
    list._id = v4();
    lists.push(list);
    return list;
  },

  async getListById(id) {
    const list = lists.find((list) => list._id === id);
    if (list) {
      list.attractions = await attractionMemStore.getAttractionsByListId(list._id);
      return list;
    }
    return null;
  },

  async getUserLists(userid) {
    return lists.filter((list) => list.userid === userid);
  },

  async deleteListById(id) {
    const index = lists.findIndex((list) => list._id === id);
    if (index !== -1) lists.splice(index, 1);
  },

  async deleteAllLists() {
    lists = [];
  },
};
