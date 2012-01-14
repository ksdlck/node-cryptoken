node-cryptoken
===========

SYNOPSIS
--------

Cryptoken exists to make life easier for folks generating auth tokens.
The example shows how what an authentication service would do to generate a token, and how that token could be verified by a seperate service.

Authentication server:

  priv = (require \fs).readFileSync \./key.pem
  token = (require \cryptoken).generate priv, {id: \hello, cap: [\email \print]}, {expires: Date.now () + 24 * 60 * 60}

Other service:

  cryptoken = require \cryptoken

  pub = (require \fs).readFileSync \./cert.pem
  valid = cryptoken.validate pub, token
  data = cryptoken.data token

KEYS
----

You can generate keys for your servers with OpenSSL.
EC keys are recommended because of their excellent size/speed to security ratio.

FUTURE
------

Add the option to encrypt your token data.
For authentication purposes, this is typically not necessary (and, frankly, typically not desirable and likely to lead to bad practice), and so has been omitted.

LICENSE
-------

Copyright (c) 2012 Karel Sedláček <k@ksdlck.com> (http://ksdlck.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
