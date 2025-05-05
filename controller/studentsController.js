const ErrorHandler = require('../utils/default/errorHandler');
const studentattendance = require('../models/studentattendanceModel');
const students = require('../models/studentsModel');


exports.findattendance = async (req, res, next) => {
    const { id } = req.params;
    let classattendance;
    classattendance = await studentattendance.findOne(
        {
            classname_student: id
        }, 'roll_no class_teacher classname_student attendance_date classname student_name present ');
    if (classattendance) {
        res.json(classattendance);

    }
    else {
        res.status(404);
        res.json({ 'message': 'No students found.' });

    }



}

exports.findclass = async (req, res, next) => {
    const { id } = req.params;
    let findclass;
    try {
        findclass = await students.find(
            {
                classname: id
            }, 'classname student_name email parents_name roll_no age address previous_dues contact_no registered_by registration_fees gender ');
    } catch (err) {
        const error = new ErrorHandler(
            'No students found.',
            404
        );
        return next(error);
    }
    res.json(findclass);



}




