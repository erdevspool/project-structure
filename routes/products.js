const router = require('express').Router()

// controllers
const getProducts = require('../controllers/product')

// check validation
const { isValidate } = require('../middlewares/validation')
 
// products routes 
router.use('/all/new/another' , isValidate , getProducts )

module.exports = router;