var expect = require('chai').expect;
var romanNumeral = require('../src/RomanNumeral');

describe('A basic test', function() {
    it('should pass when everything is okay', function() {
        expect(true).to.equal(true);
    });
});

describe('Describe roman numeral kata', function() {
    it('Should return I when inputNumber is 1', function() {
        expect(romanNumeral(1)).to.equal("I");
    });
});