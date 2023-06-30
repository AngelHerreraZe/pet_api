const petsServices = require('../services/pets.services');
const { storage } = require('./../utils/firebase');
const { ref, uploadBytes, getDownloadURL } = require('firebase/storage');

const createPet = async (req, res, next) => {
  try {
    const newPet = req.body;
    const user_id = req.user.id;
    await petsServices.create(user_id, newPet);
    res.status(201).send();
  } catch (error) {
    next(error);
  }
};

const getPets = async (req, res, next) => {
  try {
    const user_id = req.user.id;
    const result = await petsServices.getUserPets(user_id);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const modifyPet = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user_id = req.user.id;
    const updatedInfo = req.body;
    const petInfo = await petsServices.getOnePet(id, user_id);
    if (petInfo.length >= 1) {
      await petsServices.updateInfo(id, updatedInfo);
      res.status(204).send();
    } else {
      next({
        status: 400,
        message: 'This pet is not from this user id',
        errorName: 'Pet verification error',
      });
    }
  } catch (error) {
    next(error);
  }
};

const deletePet = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user_id = req.user.id;
    const petInfo = await petsServices.getOnePet(id, user_id);
    if (petInfo.length >= 1) {
      await petsServices.delete(id);
      res.status(204).send();
    } else {
      next({
        status: 400,
        message: 'This pet is not from this user id',
        errorName: 'Pet verification error',
      });
    }
  } catch (error) {
    next(error);
  }
};

const changePetPhoto = async (req, res, next) => {
  try {
    const { petId } = req.params;
    const userId = req.user.id;
    const petInfo = await petsServices.getOnePet(petId, userId)
    const imgRef = ref(storage, `pet-images/${petInfo.name}`)
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPet,
  getPets,
  modifyPet,
  deletePet,
};