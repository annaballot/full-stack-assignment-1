import Joi from "joi";

export const UserCredentialsSpec = {
  email: Joi.string().email().required(),
  password: Joi.string().required(),
};

export const UserSpec = Joi.object()
  .keys({
    firstName: Joi.string().example("Homer").required(),
    lastName: Joi.string().example("Simpson").required(),
    email: Joi.string().email().example("homer@simpson.com").required(),
    password: Joi.string().example("secret").required(),
  })
  .label("UserDetails");

export const UserArray = Joi.array().items(UserSpec).label("UserArray");

export const PlacemarkSpec = {
  name: Joi.string().required(),
  category: Joi.string().required(),
  description: Joi.string().allow("").optional(),
  latitude: Joi.number().allow("").optional(),
  longitude: Joi.number().allow("").optional(),
};

export const ListSpec = {
  title: Joi.string().required(),
};

export const AdminCredentialsSpec = {
  email: Joi.string().email().required(),
  password: Joi.string().required(),
};