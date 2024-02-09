import { userMemStore } from "./mem/user-mem-store.js";
import { listMemStore } from "./mem/list-mem-store.js";
import { attractionMemStore } from "./mem/attraction-mem-store.js";
import { userJsonStore } from "./json/user-json-store.js";
import { listJsonStore } from "./json/list-json-store.js";
import { attractionJsonStore } from "./json/attraction-json-store.js";
import { userMongoStore } from "./mongo/user-mongo-store.js";
import { listMongoStore } from "./mongo/list-mongo-store.js";
import { attractionMongoStore } from "./mongo/attraction-mongo-store.js";
import { connectMongo } from "./mongo/connect.js";

export const db = {
  userStore: null,
  listStore: null,
  attractionStore: null,

  init(storeType) {
    switch (storeType) {
      case "json" :
        this.userStore = userJsonStore;
        this.listStore = listJsonStore;
        this.attractionStore = attractionJsonStore;
        break;
      case "mongo" :
        this.userStore = userMongoStore;
        this.listStore = listMongoStore;
        this.attractionStore = attractionMongoStore;
        connectMongo();
        break;
      default :
        this.userStore = userMemStore;
        this.listStore = listMemStore;
        this.attractionStore = attractionMemStore;
    }
  }
};
