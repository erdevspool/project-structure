const { check , param } = require('express-validator')

let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

exports.addUserValidation = [
    check('name').trim().notEmpty().withMessage('Please, provide a valid name ').custom(async(name)=>{
        if(name.length < 4){
            throw('Name should be more than 4 letters')
        }
    }),
    check('email').isEmail().withMessage('Invalid Email'),

    check('phone').custom(async(phone)=>{
        if(phone){
            if(isNaN(phone)){
                throw('Number should be numeric')
            }
        }
    })
]

exports.updateUserValidation = [

    check('name').trim().notEmpty().withMessage('Please, provide a valid name ').custom(async(name)=>{
        if(name.length < 4){
            throw('Name should be more than 4 letters')
        }
    }),
    check('email').isLowercase().isEmail().withMessage('Invalid Email'),

    check('phone').custom(async(phone)=>{
        if(phone){
            if(isNaN(phone)){
                throw('Number should be numeric')
            }
        }
    })

]