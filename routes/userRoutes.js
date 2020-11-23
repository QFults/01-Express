const router = require('express').Router()
let { users } = require('../db')

router.get('/users', (req, res) => {
  res.json(users)
})

router.post('/users', (req, res) => {
  users.push(req.body)
  res.sendStatus(200)
})

module.exports = router
