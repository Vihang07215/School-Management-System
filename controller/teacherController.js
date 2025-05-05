const ErrorHandler = require('../utils/default/errorHandler');
const studentfees = require('../models/studentfeesModel');
const teachersalary = require('../models/teachersalaryModel');
const nonteachingstaffsalary = require('../models/nonteachingstaffsalaryModel');


exports.allincome = async(req, res, next) => {
const {income} = req.params;
let var_studentfees_List;
 var_studentfees_List = await studentfees.find({ },'computer_fees student_name laboratory_fees roll_no month_name classname miscellaneous monthly_fees year hostel_fees accountant exam_fees ');
//		allincome
if (income.length > 0) {
      res.json(income)
    } else {
      res.status(500)
      throw new Error('No Income made till date')
    }




}

exports.allincome_year = async(req, res, next) => {
const {year} = req.params;
let var_studentfees_List;
 var_studentfees_List = await studentfees.find(
{
year
},'computer_fees student_name miscellaneous classname roll_no accountant monthly_fees year hostel_fees month_name laboratory_fees exam_fees ');
//		Allincome_year
if (income.length > 0) {
      res.json(income)
    } else {
      res.status(500)
      throw new Error(`No Income made for year ${req.params.year}`)
    }




}

exports.allincome_year_month = async(req, res, next) => {
const {month} = req.params;
let var_studentfees_List;
 var_studentfees_List = await studentfees.find(
{
monthly_fees: month
},'exam_fees month_name student_name laboratory_fees monthly_fees classname accountant roll_no year miscellaneous hostel_fees computer_fees ');
//		salary_year_month
 if (income.length > 0) {
      // res.status(201)
      res.json(income)
    } else {
      res.status(500)
      throw new Error(
        `No Income made for month ${req.params.month} of year ${req.params.year}`
      )
    }




}

exports.allsalaries = async(req, res, next) => {
const {salary} = req.params;
let var_teachersalary_List;
 var_teachersalary_List = await teachersalary.find(
{
salaryAmount: salary
},'salaryForTheYear teacher_name admin salaryAmount salaryForTheMonth ');
let var_nonteachingstaffsalary_List;
 var_nonteachingstaffsalary_List = await nonteachingstaffsalary.find(
{
salaryAmount: salary
},'salaryForTheYear staffId salaryAmount admin salaryForTheMonth staff_name ');
//		all_salary
if (salary.length > 0 || staff_salary.length > 0) {
      var new_salary = salary.concat(staff_salary)
      res.json(new_salary)
    } else {
      res.status(500)
      throw new Error('No salary given till date')
    }




}

exports.allsalary_year = async(req, res, next) => {
const { salaryForTheYear} = req.params;
let var_teachersalary_List_year;
 var_teachersalary_List_year = await teachersalary.find(
{
salaryForTheYear:  salaryForTheYear
},'salaryForTheYear salaryForTheMonth salaryAmount admin teacher_name ');
//		salary_year
console.log(salary)
    console.log('staffsalary', staff_salary)
    if (salary.length > 0 || staff_salary.length > 0) {
      var new_salary = salary.concat(staff_salary)
      res.json(new_salary)
    } else {
      res.status(500)
      throw new Error(`No salary made for year ${req.params.year}`)
    }




}

exports.allsalary_year_month = async(req, res, next) => {
const {salaryForTheMonth, salaryForTheYear} = req.query;
let var_nonteachingstaffsalary_List;
 var_nonteachingstaffsalary_List = await nonteachingstaffsalary.find(
{
salaryForTheYear,
salaryForTheMonth
},'staffId staff_name salaryAmount admin salaryForTheYear salaryForTheMonth ');
//		Salary_year_Month
if (salary.length > 0 || staff_salary.length > 0) {
      var new_salary = salary.concat(staff_salary)
      res.json(new_salary)
    } else {
      res.status(500)
      throw new Error(
        `No salary made for month ${req.params.month} of year ${req.params.year}`
      )
    }




}




