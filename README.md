Bch P2P
=======

[![NPM Package](https://img.shields.io/npm/v/bch-p2p.svg?style=flat-square)](https://www.npmjs.org/package/bch-p2p)
[![Build Status](https://img.shields.io/travis/owstack/bch-p2p.svg?branch=master&style=flat-square)](https://travis-ci.org/owstack/bch-p2p)
[![Coverage Status](https://img.shields.io/coveralls/owstack/bch-p2p.svg?style=flat-square)](https://coveralls.io/r/owstack/bch-p2p?branch=master)

Adds [Bitcoin protocol](https://en.bitcoin.it/wiki/Protocol_documentation) support for Bch Node.

See [the main bch repo](https://github.com/owstack/bch) for more information.

## Getting Started

```sh
npm install bch-p2p
```
In order to connect to the Bitcoin network, you'll need to know the IP address of at least one node of the network, or use [Pool](/docs/pool.md) to discover peers using a DNS seed.

```javascript
var Peer = require('@wedontknowjs/bch-p2p').Peer;

var peer = new Peer({host: '127.0.0.1'});

peer.on('ready', function() {
  // peer info
  console.log(peer.version, peer.subversion, peer.bestHeight);
});
peer.on('disconnect', function() {
  console.log('connection closed');
});
peer.connect();
```

Then, you can get information from other peers by using:

```javascript
// handle events
peer.on('inv', function(message) {
  // message.inventory[]
});
peer.on('tx', function(message) {
  // message.transaction
});
```

Take a look at the [bch guide](http://bch.io/guide/peer.html) on the usage of the `Peer` class.

## Contributing

See [CONTRIBUTING.md](https://github.com/owstack/bch/blob/master/CONTRIBUTING.md) on the main bch repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/owstack/bch/blob/master/LICENSE).

Copyright 2017 Open Wallet Stack.
