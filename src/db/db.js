const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyBv40e2cJJqsMWzJkPb1pYhjDUwGQGLNEw',
  authDomain: 'cold-db482.firebaseapp.com',
  projectId: 'cold-db482',
});

const db = getFirestore(firebaseApp);

module.exports = db;
