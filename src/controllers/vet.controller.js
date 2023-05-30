const { isAdmin } = require('../middlewares/role.middleware');
const UserServices = require('../services/user.services');
const vetServices = require('../services/vet.services');

const createVet = async (req, res, next) => {
  try {
    const { user_id, specialty, status } = req.body;
    const userInfo = await UserServices.getUserInfo(user_id);
    const { name } = userInfo;
    await vetServices.create(name, specialty, status, user_id);
    await UserServices.update(user_id, {role: "VET"});
    res.status(201).send();
  } catch (error) {
    next(error);
  }
};

const updateVet = async (req, res, next) => {
  try {
    const updatedInfo = req.body;
    const { id } = req.params;
    await vetServices.update(id, updatedInfo);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createVet,
  updateVet,
};
