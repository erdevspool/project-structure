const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan')

const userRouter = require('./routes/user')
const productRouter = require('./routes/products')

app.use(cors({}));
app.use(morgan('dev'));


app.use('/users' , userRouter)
app.use('/product' , productRouter )


module.exports = app;