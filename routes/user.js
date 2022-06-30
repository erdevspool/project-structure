const router = require('express').Router()

// controllers
const {addUser , getUsers , updateUser , deleteUser , getOneUsersById } = require('../controllers/user');
const {addUserValidation , updateUserValidation} = require('../validator/user')
const validationResult = require('../validator')

// check validation
const {isValidate} = require('../middlewares/validation')
const {isAuth} = require('../middlewares/validation')


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


// all user routes 
// router.get('/current' , isValidate , isAuth , currentUsers)

// router.get('/all' , isValidate ,  allUsers)

// router.get('/all/one' , isValidate , isAuth ,  allOneUsers )

// router.get('/new/all/another/pull' ,isValidate , anotherUsers)


module.exports = router;
