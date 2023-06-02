const jwt = require('jsonwebtoken');
const db = require('../db/db');
const { getDocs, where, query, collection } = require('firebase/firestore');

const usersRef = collection(db, 'users');
const secretKey = 'abacate';

class UserController {
  static async users(req, res) {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, secretKey);

    const { email } = decoded;
    const filter = query(usersRef, where('email', '==', email));

    const response = await getDocs(filter);
    if (response.empty) {
      return res.status(404).json({ error: 'Nome não existente' });
    }

    const user = response.docs[0].data();
    return res.json({ ...user });
  }
}

module.exports = UserController;
