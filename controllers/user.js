// get users 
const getUsers = (req, res)=>{
   res.send('Get users index')
}

// get current users 
const currentUsers = (req, res)=>{
    res.send('Get current users ')
 }

// get all users 
const allUsers = (req, res)=>{
    res.send('Get All users ')
 }

// get one user from all
const allOneUsers = (req, res)=>{
    res.send('Get one user from the all users')
 }

// get another pull user 
const anotherUsers = (req, res)=>{
    res.send('Get new all another pull users')
 }


module.exports = {getUsers , currentUsers, anotherUsers , allOneUsers , allUsers} ;