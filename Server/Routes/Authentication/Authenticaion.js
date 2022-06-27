const { mentorLogin,mentorRegistration } = require("../../Controller/Authentication/Mentor");
const { adminLogin,adminRegistration} = require("../../Controller/Authentication/Admin");
const express = require("express")
const router = express.Router()

// Mentor Authentication
router.post("/mentor/register",mentorRegistration);
router.post("/mentor/login",mentorLogin);

// Admin Login
router.post("/admin/register",adminRegistration);
router.post("/admin/login",adminLogin)


module.exports = router;