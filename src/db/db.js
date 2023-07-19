const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
require('dotenv').config();

const firebaseConfig = {
  apiKey: 'AIzaSyBBK5qbAxpXeb5_RwYnfVoF7BQg0-F3riU',
  authDomain: 'cold-59454.firebaseapp.com',
  projectId: 'cold-59454',
  storageBucket: 'cold-59454.appspot.com',
  messagingSenderId: '512876140306',
  appId: '1:512876140306:web:77473c3a0b48730782c5cb',
  measurementId: 'G-Y9MHR08DHW',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

module.exports = db;
