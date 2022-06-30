const { check, param } = require("express-validator");

exports.addProductValidate = [
  check("title")
                .notEmpty()
                .withMessage("Title can not be Empty"),


  check("description")
                    .notEmpty()
                    .withMessage("Description can not be Empty"),


  check('quantity')
                   .notEmpty()
                   .withMessage('Quantity Cannot be Empty')
                   .custom(async(quntity)=>{
                    if(isNaN(quntity)){
                        throw('Quantity should be numeric Number')
                    }
                   }),


  check('price')
                .notEmpty()
                .withMessage('Quantity Cannot be Empty')
                .custom(async(quntity)=>{
                if(isNaN(quntity)){
                    throw('Price should be numeric Number')
                }
                })
]


exports.updateProductValidate = [
  check("title")
                .notEmpty()
                .withMessage("Title can not be Empty"),


  check("description")
                    .notEmpty()
                    .withMessage("Description can not be Empty"),


  check('quantity')
                   .notEmpty()
                   .withMessage('Quantity Cannot be Empty')
                   .custom(async(quntity)=>{
                    if(isNaN(quntity)){
                        throw('Quantity should be numeric Number')
                    }
                   }),


  check('price')
                .notEmpty()
                .withMessage('Quantity Cannot be Empty')
                .custom(async(quntity)=>{
                if(isNaN(quntity)){
                    throw('Price should be numeric Number')
                }
                })
];
