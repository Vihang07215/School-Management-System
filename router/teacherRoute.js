const express = require("express");
const router = express.Router();

const {allincome, allincome_year, allincome_year_month, allsalaries, allsalary_year, allsalary_year_month} = require("../controller/teacherController");



router.get("/allincome/income/:income",  allincome);

router.get("/allincome/year/year/:year",  allincome_year);

router.get("/allincome/year/month/month/:month",  allincome_year_month);

router.get("/allsalaries/salary/:salary",  allsalaries);

router.get("/allsalary/year/ salaryForTheYear/: salaryForTheYear",  allsalary_year);

router.get("/allsalary/year/month",  allsalary_year_month);

module.exports = router;