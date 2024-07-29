const express = require('express')
const Community = express.Router()

const User = require('../models/user');
const Events = require('../models/user');

Community.get('/index', async (req, res) => {
    // const events = await Events.find({}).populate("userId");
    // const events = await Events.find({}).populate({path:"userId", select:"name"});
    // const events = await Events.find({});
    const currentUser = await Events.findById(req.session.user._id)
    res.render('users/index.ejs', { events: currentUser.events, })
})

module.exports = Community