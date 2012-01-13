(function(){
  var fs, cryptoken, priv, token, pub, valid, data;
  fs = require('fs');
  cryptoken = require('../../lib/cryptoken');
  priv = fs.readFileSync('./key.pem');
  token = cryptoken.generate(priv, {
    id: 'hello',
    caps: ['email', 'print']
  });
  console.log("generated token: " + token);
  pub = fs.readFileSync('./cert.pem');
  console.log(new Buffer(token, 'base64').toString('ascii'));
  valid = cryptoken.validate(pub, token);
  console.log("token is" + (valid && " " || " not ") + "valid");
  data = cryptoken.data(token);
  console.log("token data: " + JSON.stringify(data));
}).call(this);
