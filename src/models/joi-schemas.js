import Joi from "joi";

export const IdSpec = Joi.alternatives().try(Joi.string(), Joi.object()).description("a valid ID");

export const UserCredentialsSpec = Joi.object()
  .keys({
    email: Joi.string().email().example("homer@simpson.com").required(),
    password: Joi.string().example("secret").required(),
  })
  .label("UserCredentials");

export const UserSpec = UserCredentialsSpec.keys({
  firstName: Joi.string().example("Homer").required(),
  lastName: Joi.string().example("Simpson").required(),
}).label("UserDetails");

export const UserSpecPlus = UserSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("UserDetailsPlus");

export const UserArray = Joi.array().items(UserSpecPlus).label("UserArray");





export const PlacemarkSpec = Joi.object()
  .keys({
    name: Joi.string().required().example("Clonea"),
    category: Joi.string().required().example("Beach"),
    description: Joi.string().allow("").optional().example("Lovely Beach in West Waterford"),
    latitude: Joi.number().allow("").optional().example(3.58),
    longitude: Joi.number().allow("").optional().example(8.24),
    userid: IdSpec,
    listid: IdSpec,
  })
  .label("Placemark");

export const PlacemarkSpecPlus = PlacemarkSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("PlacemarkPlus");

export const PlacemarkArraySpec = Joi.array().items(PlacemarkSpecPlus).label("PlacemarkArray");





export const ListSpec = Joi.object()
  .keys({
    title: Joi.string().required().example("Favourite Beaches"),
    userid: IdSpec,
    placemarks: PlacemarkArraySpec,
  })
  .label("List");

export const ListSpecPlus = ListSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("ListPlus");

export const ListArraySpec = Joi.array().items(ListSpecPlus).label("ListArray");




export const AdminCredentialsSpec = {
  email: Joi.string().email().required(),
  password: Joi.string().required(),
};