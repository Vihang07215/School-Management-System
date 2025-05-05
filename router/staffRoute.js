const express = require("express");
const router = express.Router();

const {delete_NonTeachingStaff, getNonTeachingStaff, new_staff, NonTeachingStaffSalary_newstaff} = require("../controller/staffController");



router.delete("/delete/NonTeachingStaff/id/:id",  delete_NonTeachingStaff);

router.get("/getNonTeachingStaff",  getNonTeachingStaff);

router.post("/newstaff",  new_staff);

router.post("/fees/name/id",  NonTeachingStaffSalary_newstaff);

module.exports = router;