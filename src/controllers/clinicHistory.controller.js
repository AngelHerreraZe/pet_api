const { ref, uploadBytes, getDownloadURL } = require('firebase/storage');
const clinicHistoryServices = require('../services/clinicHistory.services');
const { storage } = require('../utils/firebase');

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

const getClinicHistory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await clinicHistoryServices.getClinicHS(id);
    const clinicHistoriesPromises = result.map(async (clinicHistory) => {
      const chImagesPromises = clinicHistory.ChImages.map(async (chImg) =>{
        const imgRef = ref(storage, chImg.url);
        const url = await getDownloadURL(imgRef);
        chImg.url = url;
        return chImg;
      });
      const chImagesResolved = await Promise.all(chImagesPromises);
      clinicHistory.chImages = chImagesResolved;
      return clinicHistory;
    });
    const clinicHistoriesResolved = await Promise.all(clinicHistoriesPromises);
    return res.status(200).json(clinicHistoriesResolved);
  } catch (error) {
    next(error);
  }
};

const updloadPhotosCH = async (req, res, next) => {
  try {
    const { id } = req.params;
    const images = req.files;
    const imagesDescriptions = req.body;
    const imgRefs = [];
    for (const file of images) {
      const imgRef = ref(
        storage,
        `clinic-history-images/id-${id}-${file.originalname}`
      );
      const imgUploaded = await uploadBytes(imgRef, file.buffer);
      imgRefs.push(imgUploaded.metadata.fullPath);
    }
    await clinicHistoryServices.uploadPhotosHS(id, imagesDescriptions, imgRefs);
    return res.status(200).send();
  } catch (error) {
    next(error);
  }
};


module.exports = {
  createClinicHistory,
  updateClinicHistory,
  getClinicHistory,
  updloadPhotosCH,
};
