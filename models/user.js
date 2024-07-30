const mongoose = require('mongoose');
const eventSchema = require('./event').schema;

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
  registeredEvents: [eventSchema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;