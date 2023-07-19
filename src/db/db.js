const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
require('dotenv').config();

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);

const db = getFirestore(firebaseApp);

module.exports = db;
