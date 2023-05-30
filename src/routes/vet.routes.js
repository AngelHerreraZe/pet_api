const { Router } = require('express');
const { createVet, updateVet } = require('../controllers/vet.controller');
const authenticate = require('../middlewares/aut.middleware');
const { isAdmin } = require('../middlewares/role.middleware');
const router = Router();

router.post("/vets", authenticate, isAdmin, createVet);
router.put("/vet/:id", authenticate, isAdmin, updateVet);

module.exports = router;