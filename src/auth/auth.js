const crpt = require('crypto-js');

class Authenticator {
  static setPayload(user) {
    const payloadUser = JSON.stringify({
      'payload.email': user.email,
      'payload.password': user.password,
    });

    return payloadUser;
  }

  static geraToken(params) {
    const header = JSON.stringify({
      alg: 'HS256',
      typ: 'JWT',
    });

    const payload = this.setPayload(params);

    const base64header = Buffer.from(header)
      .toString('base64')
      .replace(/=/g, '');
    const base64payload = Buffer.from(payload)
      .toString('base64')
      .replace(/=/g, '');
    const secret = 'abacate';

    const data = `${base64header}.${base64payload}`;

    const signature = crpt
      .createHmac('SHA256', secret)
      .update(data)
      .digest('base64');

    const signatureUrl = signature
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=/g, '');

    return signatureUrl;
  }
}

module.exports = Authenticator;
