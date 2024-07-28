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


module.exports = router