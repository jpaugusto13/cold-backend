const db = require('../db/db');
const jwt = require('jsonwebtoken');
const { getDocs, where, query, collection } = require('firebase/firestore');

const usersRef = collection(db, 'users');
const secretKey = 'abacate';

class LoginController {
  static async login(req, res) {
    const { email, password } = req.body;

    const filter = query(usersRef, where('email', '==', email));
    const response = await getDocs(filter);

    if (response.empty) {
      return res.status(404).json({ error: 'Usuário não cadastrado' });
    }

    const user = response.docs[0].data();
    if (user.password === password) {
      const token = jwt.sign({ email }, secretKey, { expiresIn: '1h' });
      return res.json({ token });
    }

    return res.status(401).json({ error: 'Senha incorreta' });
  }
}

module.exports = LoginController;
