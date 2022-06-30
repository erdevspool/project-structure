const User = require("../model/User");

// get users
exports.getUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.send(user);
    console.log("user gotted");
  } catch (error) {
    console.log(error);
  }
};

exports.getOneUsersById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.send(user);
    console.log("a single user gotted");
  } catch (error) {
    console.log(error);
  }
};

// add a user
exports.addUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();

    res.status(200).json({ message: "Successfully added a user" });
  } catch (error) {
    res.status(500).json({ message: "got an error" });
  }
};

// update user
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    const { name, email, address, phone } = req.body;
    
    user.name = name ? name : user.name;
    user.email = email ? email : user.email;
    user.address = address ? address : user.address;
    user.phone = phone ? phone : user.phone;
    user.save();

    res.status(200).json({ message: "Successfully Updated a user" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "got an error" });
  }
};

//  delete user
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.send(user);

    console.log("Deleted successfully");
  } catch (error) {
    console.log(error);
  }
};

// // get current users
// exports.currentUsers = (req, res)=>{
//     res.send('Get current users ')
//  }

// // get all users
// exports.allUsers = (req, res)=>{
//     res.send('Get All users ')
//  }

// // get one user from all
// exports.allOneUsers = (req, res)=>{
//     res.send('Get one user from the all users')
//  }

// // get another pull user
// exports.anotherUsers = (req, res)=>{
//     res.send('Get new all another pull users')
//  }

// module.exports = { currentUsers, anotherUsers , allOneUsers , allUsers} ;
