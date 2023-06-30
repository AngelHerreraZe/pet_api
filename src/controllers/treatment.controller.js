const treatmentServices = require('../services/treatment.services');

const createTreatment = async (req, res, next) => {
  try {
    const treatmentInformation = req.body;
    await treatmentServices.createTreatment(treatmentInformation);
    return res.send(201).send();
  } catch (error) {
    next(error);
  }
};

const updateTreatment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedInfo = req.body;
    await treatmentServices.updateTreatment(updatedInfo, id);
    return res.send(204).send();
  } catch (error) {
    next(error);
  }
};

const getTreatmentInfo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await treatmentServices.getInfo(id);
    return res.status(200).json(result); 
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createTreatment,
  updateTreatment,
  getTreatmentInfo,
};
