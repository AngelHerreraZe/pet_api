const { Router } = require('express');
const { isVet } = require('../middlewares/role.middleware');
const authenticate = require('../middlewares/aut.middleware');
const { upload } = require('../utils/multer');
const {
  createClinicHistory, updateClinicHistory, updloadPhotosCH, getPhotosCH, getClinicHistory,
} = require('../controllers/clinicHistory.controller');

const router = Router();

router
  .route("/clinichistory/:pet_id")
  .post(authenticate, isVet, createClinicHistory)
  

router
  .route("/clinichistory/:id")
  .get(getClinicHistory)
  .put(authenticate, isVet, updateClinicHistory);
  
router
  .route("/clinichistory/images/:id")
  .post(upload.array('photos',), authenticate, isVet ,updloadPhotosCH)



module.exports = router;