const express = require("express");
const router = express.Router();
const todoControllers = require("../controllers/todoControllers");

router.get("/details/:id", todoControllers.getDetails);

router.delete("/details/:id", todoControllers.deleteDetails);

module.exports = router;
