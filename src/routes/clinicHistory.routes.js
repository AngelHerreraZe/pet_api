const { Router } = require('express');
const { isVet } = require('../middlewares/role.middleware');
const authenticate = require('../middlewares/aut.middleware');
const {
  createClinicHistory, updateClinicHistory, getClinicHistoryByPet,
} = require('../controllers/clinicHistory.controller');

const router = Router();

router
  .route("/clinichistory/:pet_id")
  .post(authenticate, isVet, createClinicHistory)
  .get(getClinicHistoryByPet);
  
router.put("/clinichistory/:id", authenticate, isVet, updateClinicHistory);


module.exports = router;