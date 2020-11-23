const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

let users = []

app.get('/users', (req, res) => {
  res.json(users)
})

app.post('/users', (req, res) => {
  users.push(req.body)
  res.sendStatus(200)
})


// let dog = {}

// app.get('/beef', (req, res) => {
//   res.json(dog)
// })

// app.post('/beef', (req, res) => {  
//   dog = req.body
//   res.sendStatus(200)
// })

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'))
// })

// app.get('/portfolio', (req, res) => {
//   res.sendFile(path.join(__dirname, 'portfolio.html'))
// })

// app.get('/contact', (req, res) => {
//   res.sendFile(path.join(__dirname, 'contact.html'))
// })

app.listen(3000)
