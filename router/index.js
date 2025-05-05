const express = require("express");
const router = express.Router();

const adminRoute = require("./adminRoute");
const staffRoute = require("./staffRoute");
const studentsRoute = require("./studentsRoute");
const teacherRoute = require("./teacherRoute");

router.use("/admin", adminRoute);
router.use("/staff", staffRoute);
router.use("/students", studentsRoute);
router.use("/teacher", teacherRoute);

module.exports = router;
