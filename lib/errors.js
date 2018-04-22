'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on bch-p2p Module {0}'
};

module.exports = require('@wedontknowjs/bch-lib').errors.extend(spec);
