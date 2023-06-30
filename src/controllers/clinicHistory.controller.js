const clinicHistoryServices = require('../services/clinicHistory.services');

const createClinicHistory = async (req, res, next) => {
  try {
    const vet_id = req.user.vetId;
    const { pet_id } = req.params;
    const newClinicHistory = req.body;
    await clinicHistoryServices.createHS(vet_id, pet_id, newClinicHistory);
    res.status(201).json();
  } catch (error) {
    next(error);
  }
};

const updateClinicHistory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedInfo = req.body;
    await clinicHistoryServices.updateHS(id, updatedInfo);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

const getClinicHistoryByPet = async (req, res, next) => {
  try {
    const { pet_id } = req.params;
    const result = await clinicHistoryServices.getClinicHS(pet_id);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createClinicHistory,
  updateClinicHistory,
  getClinicHistoryByPet
};
