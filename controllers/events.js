const express = require('express')
const router = express.Router()

const User = require('../models/user')


router.get('/', async (req, res) => {
    try {
      const currentUser = await User.findById(req.session.user._id)
      res.render('events/index.ejs', {
        events: currentUser.events,
      })
    } catch (error) {
      console.log(error)
      res.redirect('/')
    }
});

router.get('/new', async (req, res) => {
  res.render('events/new.ejs')
})

router.post('/', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id)
    req.body.date = new Date(req.body.date)
    currentUser.events.push(req.body)
    await currentUser.save()
    res.redirect(`/users/${currentUser._id}/events`)
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
})


module.exports = router