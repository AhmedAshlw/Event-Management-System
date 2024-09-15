const mongoose = require("mongoose");
const eventSchema = require("./event").schema;

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
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
