const {Router} = require('express');
const { createUser, userLogin } = require('../controllers/user.controller');
const { createUserValidator } = require('../validators/users.validators');
const router = Router();

router.post("/users",createUserValidator, createUser);
router.post("/users/login", userLogin)

module.exports = router;