const ErrorHandler = require('../utils/default/errorHandler');
const nonteachingstaff = require('../models/nonteachingstaffModel');


exports.delete_NonTeachingStaff = async(req, res, next) => {
const {id} = req.params;
const deletednonteachingstaff = await nonteachingstaff.findByIdAndDelete(id);
//		delete condition
if (staff) {
      await staff.remove()
      const total_staffs = (await NonTeachingStaff.find()).length
      await Dashboard.findOneAndUpdate(
        { title: 'Working Staffs' },
        { number: total_staffs }
      )
      res.json({ message: 'Staff Deleted successfully' })
    } else {
      res.status(404)
      throw new Error('Staff not found with the given ID')
    }




}

exports.getNonTeachingStaff = async(req, res, next) => {
let var_nonteachingstaff_List;
 var_nonteachingstaff_List = await nonteachingstaff.find({ },'age estimated_salary contact_no staffId address work gender registered_by previous_school qualification email staff_name ');



}

exports.new_staff = async(req, res, next) => {
const {address, age, contact_no, email, estimated_salary, gender, previous_school, qualification, registered_by, staff_name, staffId, work} = req.body;
let creatednonteachingstaff;
creatednonteachingstaff = await nonteachingstaff.create({
estimated_salary, 
registered_by, 
contact_no, 
previous_school, 
staffId, 
address, 
email, 
work, 
age, 
qualification, 
staff_name, 
gender, 
});
//		new_staff
 if (new_staff) {
      const total_staffs = (await NonTeachingStaff.find()).length
      await Dashboard.findOneAndUpdate(
        { title: 'Working Staffs' },
        { number: total_staffs }
      )
      console.log('done')
      console.log('total number of students', total_staffs)
      res.status(201).json({
        message: 'Staff registered successfully',
      })
      console.log('registered successfully')
    } else {
      res.status(400)
      console.log(error)
      throw new Error('Unable to register the staff')
    }




}

exports.NonTeachingStaffSalary_newstaff = async(req, res, next) => {
const {admin, salaryAmount, salaryForTheMonth, salaryForTheYear, staff_name, staffId} = req.body;
//		NonTeachingstaffsalary
const staff_info = await NonTeachingStaff.findOne({
      staff_name: capitalize(req.params.name),
      staffId: req.params.id,
    })
    console.log(staff_info)
    console.log(capitalize(req.params.name + ' ' + req.params.id))

    console.log('staff info', staff_info)
    if (staff_info) {
      const admin = req.user.name

      // console.log(admin)

      // console.log('staff id is-', staffId)
      const staffname = capitalize(req.params.name)
      const monthname = capitalize(salaryForTheMonth)
      const new_staff = await NonTeachingStaffSalary.create({
        admin,
        staff_name: staffname,
        staffId: req.params.id,

        salaryForTheYear,
        salaryForTheMonth: monthname,
        salaryAmount,
      })
      console.log(new_staff)
      if (new_staff) {
        const Fees = await TeacherSalary.find()
          .select('salaryAmount')
          .select('-_id')
        console.log('Fees', Fees)
        var total_Fees = 0
        // for (i = 0; i < Fees.length; i++) {
        //   total_Fees = Fees[i]
        // }
        var total_Fees = 0
        Fees.map(
          (fee) => (total_Fees = total_Fees + fee.salaryAmount)
          // return total_Fees
        )
        const Fees1 = await NonTeachingStaffSalary.find()
          .select('salaryAmount')
          .select('-_id')
        // for (i = 0; i < Fees.length; i++) {
        //   total_Fees = Fees[i]
        // }
        var total_Fees1 = 0
        Fees1.map(
          (fee) => (total_Fees1 = total_Fees1 + fee.salaryAmount)
          // return total_Fees
        )
        await Dashboard.findOneAndUpdate(
          { title: 'Salary Expenses' },
          { number: total_Fees + total_Fees1 }
        )
        res.status(201).json({
          message: 'staff salary paid successfully',
        })
        console.log('paid successfully')
      } else {
        res.status(400)
        console.log(error)
        throw new Error('Unable to pay the salary')
      }
    } else {
      res.status(400)
      throw new Error('staff not found')
    }





}




