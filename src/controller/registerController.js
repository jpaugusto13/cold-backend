const db = require('../db/db');
const Authentication = require('../auth/auth');
const jwt = require('jsonwebtoken');
const {
  collection,
  addDoc,
  getDocs,
  where,
  query,
} = require('firebase/firestore');

const usersRef = collection(db, 'users');
const secretKey = 'abacate';

class RegisterController {
  static async register(req, res) {
    const { name, email, password } = req.body;

    const filter = query(usersRef, where('email', '==', email));
    const response = await getDocs(filter);

    if (!response.empty) {
      return res.status(409).json({ mensage: 'Usuário já cadastrado!' });
    }
    // const token = Authentication.geraToken({ name, email });
    const token = jwt.sign({ email }, secretKey, { expiresIn: '1h' });

    const user = {
      name: name,
      email: email,
      password: password,
      money: 0,
      token: token,
    };
    await addDoc(usersRef, user);
    return res.status(201).json({ mensage: 'Usuário cadastrado!' });
  }
}

module.exports = RegisterController;
