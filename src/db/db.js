const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
require('dotenv').config();

const firebaseConfig = {
  apiKey: 'AIzaSyAgflFv5h7jeNEvFir-7jIc4csryLIYOS0',
  authDomain: 'cold2-5b92b.firebaseapp.com',
  projectId: 'cold2-5b92b',
  storageBucket: 'cold2-5b92b.appspot.com',
  messagingSenderId: '164778497015',
  appId: '1:164778497015:web:543303ca2cc7b5bce654f2',
  measurementId: 'G-2PTXSMTBF3',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = db;
