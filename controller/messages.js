const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const Message = require("../models/Message");
exports.getMessages = asyncHandler(async (req, res, next) => {
  const message = await Message.find(req.query);
  res.status(201).json({ success: true, message });
});

exports.createMessages = asyncHandler(async (req, res, next) => {
  const message = await Message.create(req.body);
  res.status(201).json({ success: true, data: message });
});
