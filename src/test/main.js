'use strict';

var chai = require('chai');
var expect = chai.expect;
var app = require('../index.js');
var request = require('request');

describe('Main service', function () {

	describe('basic routing http codes', () => {
		it('should return 200 OK on /quote', function (done) {
			request('http://localhost:1234/quote', function (error, response, body) {
				expect(response.statusCode).to.eq(200);
				done();
			})
		})

		it('should return 404 Not Found on /nonexistingurl', function (done) {
			request('http://localhost:1234/nonexistingurl', function (error, response, body) {
				expect(response.statusCode).to.eq(404);
				done();
			})
		})
	})
})
