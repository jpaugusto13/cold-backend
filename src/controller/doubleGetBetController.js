const db = require('../db/db');
const { getDocs, where, query, collection } = require('firebase/firestore');

const usersRef = collection(db, 'double');

class doubleGetBetController {
  static async getBet(req, res) {
    const filter = req.query.filter;
    const filterArray = query(usersRef, where('doubleBet', '==', filter));
    const response = await getDocs(filterArray);
    const docs = response.docs;
    let users = Array();
    docs.forEach((item) => users.push(item.data()));
    return res.json(users);
  }
}

module.exports = doubleGetBetController;
