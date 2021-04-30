const mongoose = require("mongoose");
const MessageSchema = new mongoose.Schema({
  body: {
    type: String,
    trim: true,
    required: [true, "Message body cannot be empty"],
  },
  datetime: {
    type: Date,
    default: Date.now,
  },
  roomid: {
    type: String,
    trim: true,
    required: [true, " Room cannot be empty"],
  },
});
module.exports = mongoose.model('Message',MessageSchema);