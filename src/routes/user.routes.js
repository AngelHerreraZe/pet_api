const {Router} = require('express');
const { createUser, userLogin, updateUserInfo, changePassword, deleteUser, getUserInfo } = require('../controllers/user.controller');
const { createUserValidator } = require('../validators/users.validators');
const authenticate = require('../middlewares/aut.middleware');
const router = Router();

router.post("/users",createUserValidator, createUser);
router.post("/users/login", userLogin)
router.put("/users", authenticate, updateUserInfo);
router.put("/users/password", authenticate, changePassword)
router.delete("/users", authenticate, deleteUser);
router.get("/user",authenticate, getUserInfo);

module.exports = router;