const express = require('express')
const router = express.Router()

const User = require('../models/user');
const Event = require('../models/event');

router.get('/', async (req, res) => {
    const currentUser = await User.findById(req.session.user._id);
    // const currentUser = await User.find({})
    if (currentUser) {
        res.render('community/index.ejs', { events: currentUser.events });
    } else {
        res.render('community/index.ejs', { events: [] });
    }
    res.render('community/index.ejs', { events: currentUser.events })
    // const events = await Events.find({})
})

router.get('/:eventsId', async (req, res) => {
    try {
      const currentUser = await User.findById(req.session.user._id)
      const event = currentUser.events.id(req.params.eventsId)
      res.render('community/show.ejs', { event })
    } catch (error) {
      console.log(error)
      res.redirect('/')
    }
  });

  router.post('/:eventsId', async (req, res) => {
    try {
      const currentUser = await User.findById(req.session.user._id)
      currentUser.registeredEvents.push(req.session.user._id)
      await currentUser.save()
      res.redirect(`/users/${currentUser._id}/events`)
    } catch (error) {
      console.log(error)
      res.redirect('/')
    }
});

module.exports = router