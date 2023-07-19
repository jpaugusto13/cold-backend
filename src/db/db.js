const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
require('dotenv').config();

const firebaseConfig = {
  apiKey: 'AIzaSyBro-BeyaSOJh-Lt2VSW8xQEFQQnxUKtRo',
  authDomain: 'cold2-4b9cc.firebaseapp.com',
  projectId: 'cold2-4b9cc',
  storageBucket: 'cold2-4b9cc.appspot.com',
  messagingSenderId: '612165737232',
  appId: '1:612165737232:web:fc16dc171dd12586aae395',
  measurementId: 'G-HK2EFN0Y2J',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

module.exports = db;
