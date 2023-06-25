const {Router} = require('express');
const { createUser, userLogin, updateUserInfo, changePassword, deleteUser, getUserInfo, changePhoto } = require('../controllers/user.controller');
const { createUserValidator } = require('../validators/users.validators');
const authenticate = require('../middlewares/aut.middleware');
const { upload } = require('../utils/multer');
const router = Router();


router
    .route("/users")
    .post(createUserValidator, createUser)
    .put(authenticate, updateUserInfo)
    .delete(authenticate, deleteUser);

router.post("/users/login", userLogin);
router.put("/users/password", authenticate, changePassword);

router
    .route("/user")
    .post(upload.single('photo'), authenticate, changePhoto)
    .get(authenticate, getUserInfo);

module.exports = router;