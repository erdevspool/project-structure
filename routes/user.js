const router = require('express').Router()

// controllers
const {addUser , getUsers , updateUser , deleteUser , getOneUsersById } = require('../controllers/user');


// check validation
const {addUserValidation , updateUserValidation} = require('../validator/user')
const validationResult = require('../validator')


// get users 
router.get('/' ,  getUsers);

// add or post users 
router.post('/' , addUserValidation, validationResult ,   addUser);

// update or patch a user
router.patch('/:id' , updateUserValidation ,validationResult ,  updateUser );

// delete a user 
router.delete('/:id' , deleteUser );


// get a user by id
router.get('/:id' , getOneUsersById );


module.exports = router;
