// const mongoose = require('mongoose')
// const express = require('express')
import express from 'express'
import mongoose from 'mongoose'

const app = express()

const route = express.Router()
route.get('/', (request, response) => {
  response.status(200).json('hi form suneel')
})

app.use('/users', route)

const url =
  'mongodb+srv://sahusuneel:<1605114507>@crud.620ho.mongodb.net/PROJECT0?retryWrites=true&w=majority'

app.get('/', (request, response) => {
  response.send('Hello World!')
})

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    app.listen(3001, () => {
      console.log('running on the port 3001')
    })
  })
  .catch(error => {
    console.log('Error: ', console.error.message)
  })
