const { Router } = require('express');
const authenticate = require('../middlewares/aut.middleware');
const { createAppoinment, modifyAppointment, getAllAppointmentsByVet } = require('../controllers/appointment.controller');
const { isVet } = require('../middlewares/role.middleware');

const router = Router();

router.post("/appointment/vet/:vet_id/pet/:pet_id", authenticate, createAppoinment);
router.put("/appointment/:id", authenticate, isVet, modifyAppointment)
router.get("/appointments/:vet_id", getAllAppointmentsByVet)

module.exports = router;