var test = require('unit.js');

describe('Test point', function() {
    it('Can run a test', function() { 
        test.bool(true).isTrue();
    });
});