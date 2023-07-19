const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
require('dotenv').config();

const firebaseConfig = {
  apiKey: 'AIzaSyB2_03wKiuSeMi7sbIEbUFlEOwO1luMKWk',
  authDomain: 'cold-156b8.firebaseapp.com',
  projectId: 'cold-156b8',
  storageBucket: 'cold-156b8.appspot.com',
  messagingSenderId: '817553400923',
  appId: '1:817553400923:web:63bb7e05e81b1ca144cb7e',
  measurementId: 'G-RQQWSG1SM8',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = db;
