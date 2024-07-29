const express = require('express')
const router = express.Router()

const User = require('../models/user');
const Events = require('../models/event');

router.get('/', async (req, res) => {
    const currentUser = await Events.findById(req.session.user._id);
    if (currentUser) {
        res.render('community/index.ejs', { events: currentUser.events });
    } else {
        res.render('community/index.ejs', { events: [] });
    }
    // res.render('community/index.ejs', { events: currentUser.events, })

    // const events = await Events.find({})
    // const events = await Events.find({}).populate("userId");
    // const events = await Events.find({}).populate("events");
    // // console.log(events);
    // res.render('community/index.ejs', { events })

})

module.exports = router