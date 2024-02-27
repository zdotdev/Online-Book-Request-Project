import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

app.use(cors())
app.use(bodyParser.json({ limit: '20mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '20mb' }))
app.use(express.json())

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@bookapp.sibqxsw.mongodb.net/?retryWrites=true&w=majority&appName=bookApp`
  )
  .then(() => {
    app.listen(process.env.PORT)
    console.log(`Connected to port ${process.env.PORT}`)
  })
  .catch(err => {
    console.log(err)
  })
app.use('/api', (req, res) => {
  res.status(200).json({ Success: 'Connected' })
})
