import Joi from "joi";

const contactsAddSchema = Joi.object({
  name: Joi.string().required().messages({
        "any.required": `"name" must be exist`,
    }),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});

const contactUpdateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

export default {
  contactsAddSchema,
  contactUpdateFavoriteSchema,
};

// {
//     "name": "Allen Raymond",
//     "email": "nulla.ante@vestibul.co.uk",
//     "phone": "(992) 914-3792"
// }
