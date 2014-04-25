/**
 * Created by Newton on 2014/4/25.
 */
var fs = require('fs'),
    should = require('should'),
    Tokens = require(process.env.CMD_COVERAGE ? '../lib-cov/tokens' : '../lib/tokens');

describe('Tokens', function (){
    it('should has parse exports and exports is function', function (){
        Tokens.should.be.type('function');
    });
});
