const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan')
const userRouter = require('./routes/user')
const productRouter = require('./routes/products')
require('dotenv').config()
const {connect} = require('mongoose')

// app middlewares 
app.use(cors({}));
app.use(express.json())
app.use(morgan('dev'));

// database connection 
console.log(process.env.CONNECTION_URL)
connect(process.env.CONNECTION_URL)
  .then(() => console.log('MongoDB connection successfull'))
  .catch((error) => console.log(`Error to connect db ${error}`));
        


// routes 
app.use('/users' , userRouter)
app.use('/product' , productRouter )


module.exports = app;