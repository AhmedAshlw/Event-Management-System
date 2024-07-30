const mongoose = require('mongoose');
const eventSchema = require('./event').schema;
const rEventSchema = require('./registeredEvents').schema;

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  events: [eventSchema],
  registeredEvents: [rEventSchema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;