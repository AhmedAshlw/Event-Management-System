const express = require('express')
const router = express.Router()

const User = require('../models/user')
const Event = require('../models/event')

router.get('/', async (req, res) => {
    try {
      const currentUser = await User.findById(req.session.user._id);
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
});

router.post('/', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id)
    req.body.date = new Date(req.body.date);
    const newEvent = await Event.create(req.body)
    currentUser.events.push(newEvent)
    await currentUser.save()
    res.redirect(`/users/${currentUser._id}/events`)
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
});

router.get('/:eventsId', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id)
    const event = currentUser.events.id(req.params.eventsId)
    res.render('events/show.ejs', { event })
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
});

router.delete('/:eventsId', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id)
    currentUser.events.id(req.params.eventsId).deleteOne()
    await currentUser.save()
    res.redirect(`/users/${currentUser._id}/events`)
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
})

router.get('/:eventsId/edit', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id)
    const event = currentUser.events.id(req.params.eventsId)
    res.render('events/edit.ejs', { event })
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
})

router.put('/:eventsId', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    const event = currentUser.events.id(req.params.eventsId);

    event.set(req.body);
    await currentUser.save();

    res.redirect(
      `/users/${currentUser._id}/events/${req.params.eventsId}`
    );
  } catch (error) {
    console.log(error);
    res.redirect('/')
  }
});

module.exports = router