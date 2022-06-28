const router = require('express').Router()

// controllers
const {getUsers, anotherUsers, currentUsers, allUsers , allOneUsers} = require('../controllers/user')

// check validation
const {isValidate} = require('../middlewares/validation')
const {isAuth} = require('../middlewares/validation')


// all user routes 

router.get('/' , isValidate ,  getUsers)

router.get('/current' , isValidate , isAuth , currentUsers)

router.get('/all' , isValidate ,  allUsers)

router.get('/all/one' , isValidate , isAuth ,  allOneUsers )

router.get('/new/all/another/pull' ,isValidate , anotherUsers)


module.exports = router;
