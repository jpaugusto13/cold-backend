const jwt = require('jsonwebtoken');
require('dotenv').config();

class Authenticator {
  static geraToken(email) {
    const token = jwt.sign({ email }, process.env.SECRET_KEY, {
      expiresIn: '10h',
    });

    return token;
  }
}

module.exports = Authenticator;
