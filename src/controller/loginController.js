const db = require('../db/db');
const { getDocs, where, query, collection } = require('firebase/firestore');
const Authentication = require('../auth/auth');

const usersRef = collection(db, 'users');

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
      const token = Authentication.geraToken(email);
      return res.json({ token });
    }

    return res.status(401).json({ error: 'Senha incorreta' });
  }
}

module.exports = LoginController;
