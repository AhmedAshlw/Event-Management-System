const mongoose = require('mongoose');

const rEventSchema = new mongoose.Schema({
    registeredEvents: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
      },
      name: {
        type: String,
        required: true,
      },
});

const registeredEvents = mongoose.model('registeredEvents', rEventSchema);

module.exports = registeredEvents;