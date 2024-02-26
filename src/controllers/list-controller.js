import { AttractionSpec } from "../models/joi-schemas.js";
import { db } from "../models/db.js";

export const listController = {
  index: {
    handler: async function (request, h) {
      const list = await db.listStore.getListById(request.params.id);
      const viewData = {
        title: "List",
        list: list,
      };
      return h.view("list-view", viewData);
    },
  },

  addAttraction: {
    validate: {
      payload: AttractionSpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        return h.view("list-view", { title: "Add attraction error", errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const list = await db.listStore.getListById(request.params.id);
      const newCategory = {
        category: request.payload.category,
      };
      const newAttraction = {
        name: request.payload.name,
        // category: request.payload.category,
        description: request.payload.description,
        latitude: Number(request.payload.latitude),
        longitude: Number(request.payload.longitude),
      };
      await db.attractionStore.addAttraction(newCategory);
      const list = await db.listStore.getListById(request.params.id);
      await db.attractionStore.addAttraction(list._id, newAttraction, newCategory);
      return h.redirect(`/list/${list._id}`);
    },
  },

  deleteAttraction: {
    handler: async function (request, h) {
      const list = await db.listStore.getListById(request.params.id);
      await db.attractionStore.deleteAttraction(request.params.attractionid);
      return h.redirect(`/list/${list._id}`);
    },
  },
};
