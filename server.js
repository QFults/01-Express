const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/portfolio', (req, res) => {
  res.sendFile(path.join(__dirname, 'portfolio.html'))
})

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'))
})

app.listen(3000)
