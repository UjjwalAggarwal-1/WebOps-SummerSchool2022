const express = require("express");
const router = express.Router();

const authController = require("../Controller/auth_controller");

router.post("/signup", authController.signup);
router.get("/signin",authController.signin);
router.get("/verify",authController.verify);
router.get("/post/new",authController.postnew);

module.exports = router;