const db = require('../db/db');
const {
  collection,
  addDoc,
  getDocs,
  where,
  query,
} = require('firebase/firestore');
// const Authentication = require('../auth/auth');

const usersRef = collection(db, 'users');

class RegisterController {
  static async register(req, res) {
    const { firstName, lastName, cpf, phone, birthday, email, password } =
      req.body;

    const filter = query(usersRef, where('email', '==', email));
    const response = await getDocs(filter);

    if (!response.empty) {
      return res.status(409).json({ mensage: 'Usuário já cadastrado!' });
    }

    const user = {
      fistName: firstName,
      lastName: lastName,
      cpf: cpf,
      phone: phone,
      birthday: birthday,
      email: email,
      password: password,
      money: 0,
      // token: token,
    };

    // const token = Authentication.geraToken(email);
    await addDoc(usersRef, user);
    return res.status(201).json({ mensage: 'Usuário cadastrado!' });
  }
}

module.exports = RegisterController;
