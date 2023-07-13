const db = require('../db/db');
const { getDocs, where, query, collection, updateDoc, doc } = require('firebase/firestore');

const usersRef = collection(db, 'users');

class doublePlayController {
  static async play(req, res) {
    const { email, bet } = req.body;

    const filter = query(usersRef, where('email', '==', email));
    const response = await getDocs(filter);
    const user = response.docs[0];
    const userData = user.data();
    const id = user.id;
    const { money } = userData;

    const washingtonRef = doc(db, "users", id);

    if (bet <= money) {
      await updateDoc(washingtonRef, {money: money - bet});
      return res.status(200).json({money: bet});
    } else {
      return res.status(400).json();
    }
  }
}

module.exports = doublePlayController;
