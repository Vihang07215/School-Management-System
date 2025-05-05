const express = require("express");
const router = express.Router();

const {findattendance, findclass} = require("../controller/studentsController");



router.get("/class/attendance/id/:id",  findattendance);

router.get("/find/class/id/:id",  findclass);

module.exports = router;