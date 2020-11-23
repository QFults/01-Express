const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1>')
})

app.get('/portfolio', (req, res) => {
  res.send('<h1>Portfolio Page</h1>')
})

app.get('/contact', (req, res) => {
  res.send('<h1>Contact Page</h1>')
})

app.listen(3000)
