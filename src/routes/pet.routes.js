const { Router } = require('express');
const authenticate = require('../middlewares/aut.middleware');
const { createPet, modifyPet, getPets, deletePet } = require('../controllers/pets.controller');
const router = Router();

router.post("/pets", authenticate, createPet)
router.get("/pets", authenticate, getPets)
router.put("/pet/:id", authenticate, modifyPet)
router.delete("/pet/:id", authenticate, deletePet)

module.exports = router;