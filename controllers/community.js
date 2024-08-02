const express = require('express')
const router = express.Router()

const User = require('../models/user');
const Event = require('../models/event');


router.get('/', async (req, res) => {
    const events = await Event.find()
    res.render('community/index.ejs', { events });
})

router.get('/:eventsId', async (req, res) => {
    try {
      const event = await Event.findById(req.params.eventsId)
      res.render('community/show.ejs', { event })
    } catch (error) {
      console.log(error)
      res.redirect('/')
    }
  });

  router.post('/:eventsId', async (req, res) => {
    try {
      const currentUser = await User.findById(req.session.user._id);
      const eventId = req.params.eventsId
      const event = await Event.findById(eventId)
      if(!currentUser.registeredEvents.id(req.params.eventsId)){
      currentUser.registeredEvents.push(event)
      }
      await currentUser.save()
      // res.render('community/show.ejs', { events: currentUser.events, registeredEvents: currentUser.registeredEvents })

      res.redirect(`/users/${currentUser._id}/events`);

    } catch (error) {
      console.log(error)
      res.redirect('/')
    }
});

module.exports = router