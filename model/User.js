const { Schema, model } = require('mongoose');

const userSchema = Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: Number,
  address: String,
});

module.exports = model('user', userSchema);