const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
require('dotenv').config();

const firebaseConfig = {
  apiKey: 'AIzaSyCop8EI6gTWdreNposANuhRnyXhfoALrlw',
  authDomain: 'teste-85c3b.firebaseapp.com',
  projectId: 'teste-85c3b',
  storageBucket: 'teste-85c3b.appspot.com',
  messagingSenderId: '198383591523',
  appId: '1:198383591523:web:81234b3fc124c303591856',
  measurementId: 'G-S7CMJVC1R5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

module.exports = db;
