const AuthServices = require("../services/auth.services");
const UserServices = require("../services/user.services");
const transporter = require("../utils/mailer");
const bcrypt = require('bcrypt');

const createUser = async (req, res, next) => {
    try {
        const newUser = req.body;
        const result = await UserServices.create(newUser);
        await transporter.sendMail({
            from: process.env.MAIL_USER,
            to: result.email,
            subject: "Verifica tu correo electronico",
            html: `
                <p> Hola ${result.username}, <br>
                Bienvenido a nuestra aplicación de veterinaria.<br>                
                Para continuar es necesario verificar tu correo electrónico.<br>
                https://www.link.com/$token
                </p>
            `
        });
        res.status(201).json();
    } catch (error) {
        next(error);
    }
}

const userLogin = async (req, res, next) => {
    try {
        const {name, password} = req.body;
        const user = await UserServices.getUser(name);
        if (!user) { 
            return ({
                status: 400,
                message: "Invalid email",
                errorName: "User not found"
            })
        }
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return ({
                status: 400,
                message: "The password doesn't match with email user",
                messageName: "Invalid password"
            })
        }
        const { id, username, email } = user;
        const token = AuthServices.genToken({ id, username, email });
        res.json({
            id,
            username,
            email,
            token
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createUser,
    userLogin
}