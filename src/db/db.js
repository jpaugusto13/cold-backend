const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
require('dotenv').config();

const firebaseApp = initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: 'cold-db482.firebaseapp.com',
  projectId: 'cold-db482',
});

const db = getFirestore(firebaseApp);

module.exports = db;
