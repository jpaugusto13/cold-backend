const jwt = require('jsonwebtoken');
require('dotenv').config();
const secretKey = 'abacate';

class Authenticator {
  static geraToken(email) {
    const token = jwt.sign({ email }, process.env.SECRET_KEY, {
      expiresIn: '1h',
    });

    return token;
  }
}

module.exports = Authenticator;
