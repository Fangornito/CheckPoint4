const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const { verifyPassword } = require("./services/auth");

router.post(
  "/login",
  userControllers.getUserByPasswordAndPassToNext,
  verifyPassword
);
module.exports = router;
