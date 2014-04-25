/**
 * Created by Newton on 2014/4/25.
 */
var fs = require('fs'),
    should = require('should'),
    libdir = process.env.CMD_COVERAGE ? '../lib-cov' : '../lib',
    Tokens = require(libdir + '/tokens');

describe('Tokens', function (){
    it('empty should return []', function (){
        (new Tokens('')).should.be.type('array');
    });
});
