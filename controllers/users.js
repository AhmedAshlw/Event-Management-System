const express = require('express')
const Community = express.Router()

const User = require('../models/user');
const Events = require();

Community.get('/index', async (req, res) => {
    const events = await User.find({});
    // const events = await User.events.find({})
    res.render('users/index.ejs', { events })
})


module.exports = Community