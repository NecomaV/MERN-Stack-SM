require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())

//Routers 
app.use('/api', require('./routes/authRouter'))

const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to mongodb');
  })
  .catch(err => {
    console.error('Error connecting to mongodb:', err.message);
  });

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log('Server is runnig on port', port)
})