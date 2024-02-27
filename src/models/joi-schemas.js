import Joi from "joi";

export const UserCredentialsSpec = {
  email: Joi.string().email().required(),
  password: Joi.string().required(),
};

export const UserSpec = {
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
};

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
