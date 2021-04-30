const express = require("express");
const Message = require("../controller/messages");

const router = express.Router();

router.get("/", Message.getMessages);
router.post("/", Message.createMessages);
module.exports = router;
