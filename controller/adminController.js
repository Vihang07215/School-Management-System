const ErrorHandler = require('../utils/default/errorHandler');
const admin = require('../models/adminModel');


exports.AddUser = async (req, res, next) => {
    const { email, isAdmin, name, password } = req.body;
    let createdadmin;
    createdadmin = new admin({
        name,
        isAdmin,
        email,
        password,
    });
    await createdadmin.save();
    res.json(createdadmin);



}

exports.finduser = async (req, res, next) => {
    const { id } = req.params;
    let finduser;
    finduser = await admin.findById(id, 'password name email isAdmin ');
    if (finduser) {
        res.json(finduser);

    }
    else {
        const error = new ErrorHandler(
            'user not Found !!',
            404
        );
        return next(error);

    }



}

exports.Login = async (req, res, next) => {
    const { email, password } = req.body;
    let isexistinguser;
    try {
        isexistinguser = await admin.findOne(
            {
                email
            }, 'email password ');
    } catch (err) {
        const error = new ErrorHandler(
            'Invalid email !',
            402
        );
        return next(error);
    }
    if (isexistinguser && isexistinguser.password) {
        let payload = {
            email,
            password
        };
        let token;
        token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1h' });
        res.json({ token, 'login_msg': 'login successfully' });

    }
    else {
        res.json('Invalid User Data');

    }



}




