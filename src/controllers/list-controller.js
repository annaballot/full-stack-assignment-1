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
      const newAttraction = {
        title: request.payload.title,
        artist: request.payload.artist,
        duration: Number(request.payload.duration),
      };
      await db.attractionStore.addAttraction(list._id, newAttraction);
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
