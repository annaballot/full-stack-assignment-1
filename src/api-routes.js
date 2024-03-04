import { userApi } from "./api/user-api.js";
import { listApi } from "./api/list-api.js";

export const apiRoutes = [
  { method: "GET", path: "/api/users", config: userApi.find },
  { method: "POST", path: "/api/users", config: userApi.create },
  { method: "DELETE", path: "/api/users", config: userApi.deleteAll },
  { method: "GET", path: "/api/users/{id}", config: userApi.findOne },

  { method: "POST", path: "/api/lists", config: listApi.create },
  { method: "DELETE", path: "/api/lists", config: listApi.deleteAll },
  { method: "GET", path: "/api/lists", config: listApi.find },
  { method: "GET", path: "/api/lists/{id}", config: listApi.findOne },
  { method: "DELETE", path: "/api/lists/{id}", config: listApi.deleteOne },
];