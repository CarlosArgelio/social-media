const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(20);

const userSchema = Joi.object({
    name: name.required(),
});

const getUserSchema = Joi.object({
  id: id.required(),
})

module.exports = {
  userSchema,
  getUserSchema
}
