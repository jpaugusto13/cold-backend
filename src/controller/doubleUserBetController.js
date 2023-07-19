const db = require('../db/db');
const { collection, addDoc } = require('firebase/firestore');

const usersRef = collection(db, 'double');

class doubleUserBetController {
  static async betUser(req, res) {
    const { bet, color, name } = req.body;

    const user = {
      bet: bet,
      name: name,
      doubleBet: color,
    };

    await addDoc(usersRef, user);
    return res.status(201).json({ mensage: 'Usuário cadastrado!' });
  }
}

module.exports = doubleUserBetController;
