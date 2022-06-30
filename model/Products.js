const { Schema, model } = require('mongoose');

const productSchema = Schema({
  title: { type: String, required: true },
  description : { type : String, required: true },
  quantity :  { type : Number, required: true },
  price:  { type : Number, required: true },
});

module.exports = model('product', productSchema);