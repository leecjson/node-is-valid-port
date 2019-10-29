'use strict';

/**
 * https://en.wikipedia.org/wiki/Port_(computer_networking)
 */
exports = module.exports = port => 
  Number.isSafeInteger(port) && (port >= 0 && port <= 65535);