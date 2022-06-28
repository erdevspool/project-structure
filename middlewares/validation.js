// check validatation here 
const isValidate = (req, res, next)=>{
    console.log('It is validated')
    next()
}

// check authentication here 
const isAuth = (req, res, next)=>{
    console.log('It is also Authenticated ')
    next()
}


module.exports = {isValidate , isAuth};