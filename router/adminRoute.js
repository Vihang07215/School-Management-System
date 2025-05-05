const express = require("express");
const router = express.Router();

const {AddUser, finduser, Login} = require("../controller/adminController");



router.post("/adduser",  AddUser);

router.get("/finduser/id/:id",  finduser);

router.post("/login",  Login);

module.exports = router;