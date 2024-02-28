import Boom from "@hapi/boom";
import { ListSpec } from "../models/joi-schemas.js";
import { db } from "../models/db.js";

export const listApi = {
  find: {
    auth: false,
    handler: async function (request, h) {
      try {
        const lists = await db.listStore.getAllLists();
        return lists;
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
  },

  findOne: {
    auth: false,
    async handler(request) {
      try {
        const list = await db.listStore.getListById(request.params.id);
        if (!list) {
          return Boom.notFound("No List with this id");
        }
        return list;
      } catch (err) {
        return Boom.serverUnavailable("No List with this id");
      }
    },
  },

  create: {
    auth: false,
    handler: async function (request, h) {
      try {
        const list = request.payload;
        const newList = await db.listStore.addList(list);
        if (newList) {
          return h.response(newList).code(201);
        }
        return Boom.badImplementation("error creating list");
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
  },

  deleteOne: {
    auth: false,
    handler: async function (request, h) {
      try {
        const list = await db.listStore.getListById(request.params.id);
        if (!list) {
          return Boom.notFound("No List with this id");
        }
        await db.listStore.deleteListById(list._id);
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("No List with this id");
      }
    },
  },

  deleteAll: {
    auth: false,
    handler: async function (request, h) {
      try {
        await db.listStore.deleteAllLists();
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
  },
};