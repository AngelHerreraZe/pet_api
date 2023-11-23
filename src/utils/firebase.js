const { initializeApp } = require('firebase/app');
const { getStorage } = require('firebase/storage');
//Esta dado de baja el firebase

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE,
  appId: process.env.FIREBASE_APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

module.exports = { storage };