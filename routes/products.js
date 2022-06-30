const router = require('express').Router()

// controllers
const {addProducts , getAllProducts , deleteProducts , updateProducts , getOneProduct} = require('../controllers/product')





// check validation
const {addProductValidate , updateProductValidate} = require('../validator/product')
const validationResult = require('../validator')
 
// products routes 

// get all Products
router.get('/' ,  getAllProducts )

// get one product
router.get('/:id' ,  getOneProduct )

// add a product
router.post('/' , addProductValidate , validationResult ,    addProducts )

// update a product
router.patch('/:id', updateProductValidate , validationResult ,   updateProducts )

// delete a product
router.delete('/:id' ,  deleteProducts )


module.exports = router;