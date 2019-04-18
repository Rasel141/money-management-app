const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const userRouter = require('./routers/userRoute')

// call express
const app = express()

// call morgan middleware for checking what types of request
app.use(morgan('dev'))

// call cors for server blocking issue
app.use(cors())

// use body-parser for getting request body
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// User Router Path
app.use('/api/users', userRouter)

// Create Root Route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to our project'
  })
})

// Create Port
PORT = process.env.PORT || 4000

// Listen Server
app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`)
  mongoose.connect(
    'mongodb://localhost/money-management-app',
    { useNewUrlParser: true },
    () => {
      console.log('Database Connected')
    }
  )
})
