const app = require('./app')


app.get('/' , (req, res)=>{
    res.send('Backend with Mongoose')
  })

app.listen(4000 , ()=>{
    console.log('My port is running at ' , 4000)
})