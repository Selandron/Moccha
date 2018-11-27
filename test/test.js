var chai = require('chai');
var pair = require('../js/pair.js');
var concatene = require('../js/concatene.js');
var secu = require('../js/secu.js');
var rib = require('../js/rib.js');
var assert = chai.assert;
var expect = chai.expect;

describe('Array', function() {
	describe('#indexOf()', function() {
		it('should return -1 when the value is not present', function() {
	  		assert.equal([1,2,3].indexOf(4), -1);
		});
  	});
});


describe('Pair', function() {
	it('Devrait retourner vrai car 2 est pair', function() {
		expect(pair(2)).to.be.true;
	});
	it('Devrait retourner faux car 1 est impair', function() {
		expect(pair(1)).to.be.false;
	});
	it('Devrait retourner faux car 51161 est impair', function() {
		expect(pair(51161)).to.be.false;
	});
	it('Devrait retourner vrai car 0 est pair', function() {
		expect(pair(0)).to.be.true;
	});
	it("Devrait retourner faux ", function() {
		expect(pair(-1)).to.be.false;
	});
	it("Devrait lancer une erreur car aaa n'est pas un integer", function() {
		assert.throws(function () { pair("aaa") }, Error, "Value not integer");
	});
});

describe('Concatene', function() {
	it("Devrait faire la bonne chaine : 'Bonjour, test'", function() {
		assert.strictEqual(concatene('test'), "Bonjour, test");
	});
});

describe('Secu', function() {
	it("Test avec un numéro de sécurité valide", function() {
		assert.isOk(secu("196063818526247"));
	});
	it("Test avec un numéro de sécurité trop court", function() {
		assert.isNotOk(secu("19606381852624"));
	});
	it("Test avec un numéro de sécurité invalide", function() {
		assert.isNotOk(secu("196063818526248"));
	});
});

describe('RIB', function() {
	it("Test avec un numéro de sécurité valide", function() {
		assert.isOk(rib("GB87B", "ARC20", "65824497165", 74));
	});
});