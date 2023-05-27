const AuthServices = require('../services/auth.services');
const UserServices = require('../services/user.services');
const transporter = require('../utils/mailer');
const bcrypt = require('bcrypt');

const createUser = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await UserServices.create(newUser);
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: result.email,
      subject: 'Verifica tu correo electronico',
      html: `
                <p> Hola ${result.username}, <br>
                Bienvenido a nuestra aplicación de veterinaria.<br>                
                Para continuar es necesario verificar tu correo electrónico.<br>
                https://www.link.com/$token
                </p>
            `,
    });
    res.status(201).json();
  } catch (error) {
    next(error);
  }
};

const getUserInfo = async (req, res, next) => {
  try {
    const user = await UserServices.getUserInfo(req.user.username);
    res.json(user);
  } catch (error) {
    next(error);
  }
}

const userLogin = async (req, res, next) => {
  try {
    const { name, password } = req.body;
    const user = await UserServices.getUser(name);
    if (!user) {
      next({
        status: 400,
        message: 'Invalid email',
        errorName: 'User not found',
      });
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      next({
        status: 400,
        message: "The password doesn't match with email user",
        errorName: 'Invalid password',
      });
    }
    const { id, username, email } = user;
    const token = AuthServices.genToken({ id, username, email });
    res.json({
      id,
      username,
      email,
      token,
    });
  } catch (error) {
    next(error);
  }
};

const updateUserInfo = async (req, res, next) => {
  try {
    const { id } = req.user;
    const updatedInfo = req.body;
    const { password } = req.body;
    if (password) {
      next({
        status: 400,
        message: 'You cannot change the password in this endpoint',
        errorName: 'Password in request',
      });
    } else {
      await UserServices.updateUser(id, updatedInfo);
      res.status(204).send();
    }
  } catch (error) {
    next(error);
  }
};

const changePassword = async (req, res, next) => {
  try {
    const tokenId = Number(req.user.id);
    const username = req.user.username;
    const { oldPassword, newPassword, confirmationPassword } = req.body;
    const user = await UserServices.getUser(username);
    const isValid = await bcrypt.compare(oldPassword, user.password);
    if (!isValid) {
      next({
        status: 400,
        message: "The old password doesn't match with the actual password",
        errorName: 'Invalid password',
      });
    } else {
      if (newPassword !== confirmationPassword) {
        next({
          status: 400,
          message: 'New password and confirmation password are diferent',
          errorName: 'Invalid new password',
        });
      } else {
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(newPassword, salt);
        await UserServices.updatePassword(tokenId, passwordHash);
        res.status(200).send();
      }
    }
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const username = req.user.username;
    const { password, confirmationPhrase } = req.body;
    if (confirmationPhrase !== 'Estoy de acuerdo') {
      next({
        status: 400,
        message: 'Confirmation phrase not provided or incorrect',
        errorName: 'Wrong confirmation',
      });
    } else {
      const user = await UserServices.getUser(username);
      const isValid = await bcrypt.compare(password, user.password);
      if (!password || !isValid) {
        next({
          status: 400,
          message: 'Password not provided or incorrect',
          errorName: 'Wrong password',
        });
      } else {
        await UserServices.delete(userId);
        res.status(204).send();
      }
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  userLogin,
  updateUserInfo,
  changePassword,
  deleteUser,
  getUserInfo
};
