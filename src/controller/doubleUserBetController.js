const db = require('../db/db');
const { addDoc, collection, doc } = require('firebase/firestore');


class doubleUserBetController {
  static async betUser(req, res) {
    const { bet, color, name } = req.body;
    
    const user = {
      bet: bet,
      name: name,
      doubleBet: color,
    };

    const washingtonRef = collection(db, "black")

    await addDoc(washingtonRef, user);

    res.status(200).json({ bet: bet, color: color, name: name });
  }
}

module.exports = doubleUserBetController;
