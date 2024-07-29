const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
  },
  name: {
    type: String,
    required: true,
  },
  Date: {
    type: Date,
  },
  time: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
}, { timestamps: true });


const Event = mongoose.model('Event', eventSchema);

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  events: [eventSchema]
});

const User = mongoose.model('User', userSchema);

module.exports = User;