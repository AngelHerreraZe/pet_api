const appointmentServices = require('../services/appointment.services');
const petsServices = require('../services/pets.services');

const createAppoinment = async (req, res, next) => {
  try {
    const { vet_id, pet_id } = req.params;
    const userId = req.user.id;
    const newAppointment = req.body;
    const isValid = await petsServices.getOnePet(pet_id, userId);
    if (isValid.length >= 1) {
      await appointmentServices.create(vet_id, pet_id, newAppointment);
      res.status(201).send();
    } else {
      next({
        status: 400,
        message: 'This pet is not from this user',
        errorName: 'Pet verification error',
      });
    }
  } catch (error) {
    next(error);
  }
};

const getAllAppointmentsByVet = async (req, res, next) => {
  try {
    const { vet_id } = req.params;
    const result = await appointmentServices.getAllAppointmentsVet(vet_id);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const modifyAppointment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const vet_id = req.user.id;
    const updatedInfo = req.body;
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createAppoinment,
  modifyAppointment,
  getAllAppointmentsByVet,
};
