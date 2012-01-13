(function(){
  var cry, algo;
  cry = require('crypto');
  algo = 'RSA-SHA256';
  exports.generate = function(priv, data){
    var sign, sig;
    data = JSON.stringify(data);
    sign = cry.createSign(algo);
    sign.update(data);
    sig = sign.sign(priv);
    return new Buffer(JSON.stringify({
      d: data,
      s: sig
    })).toString('base64');
  };
  exports.validate = function(pub, token){
    var ver, valid;
    ver = cry.createVerify(algo);
    try {
      token = JSON.parse(new Buffer(token, 'base64').toString('ascii'));
    } catch (_e) {}
    ver.update(token.d);
    return valid = ver.verify(pub, token.s);
  };
  exports.data = function(token){
    try {
      return JSON.parse(JSON.parse(new Buffer(token, 'base64').toString('ascii')).d);
    } catch (e) {
      return null;
    }
  };
}).call(this);
