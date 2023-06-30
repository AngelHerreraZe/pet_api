const { Router } = require('express');
const authenticate = require('../middlewares/aut.middleware');
const { isVet } = require('./../middlewares/role.middleware');
const {
  createTreatment,
  updateTreatment,
  getTreatmentInfo,
} = require('../controllers/treatment.controller');

const router = Router();

router.post('/treatment', authenticate, isVet, createTreatment);
router
  .route('/treatment/:id')
  .put(authenticate, isVet, updateTreatment)
  .get(authenticate, getTreatmentInfo);

module.exports = router;
