var chai = require('chai');
var chaiImmutable = require('chai-immutable');
chai.use(chaiImmutable);
global.expect = chai.expect;

let testsContext = require.context('.', true, /_test/);
testsContext.keys().forEach(testsContext);
