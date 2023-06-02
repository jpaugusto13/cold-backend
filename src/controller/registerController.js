const db = require('../db/db');
const Authentication = require('../auth/auth');
const {
  collection,
  addDoc,
  getDocs,
  where,
  query,
} = require('firebase/firestore');

const usersRef = collection(db, 'users');

class RegisterController {
  static async register(req, res) {
    const { name, email, password } = req.body;

    const filter = query(usersRef, where('email', '==', email));
    const response = await getDocs(filter);

    if (!response.empty) {
      return res.status(409).json({ mensage: 'Usuário já cadastrado!' });
    }
    const token = Authentication.geraToken({ name, email });

    const user = {
      name,
      email,
      password,
      money: 0,
      token,
    };
    await addDoc(usersRef, user);
    return res.status(201).json({ mensage: 'Usuário cadastrado!' });
  }
}

module.exports = RegisterController;
