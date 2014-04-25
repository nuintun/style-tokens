/**
 * Created by Newton on 2014/4/25.
 */
var fs = require('fs'),
    should = require('should'),
    Tokens = require('../index');

describe('Tokens', function (){
    it('should has parse exports and exports is function', function (){
        Tokens.Parse.should.be.type('function');
    });

    it('should has token type exports and exports is object', function (){
        Tokens.TokenType.should.be.type('object');
    });

    it('should has token type exports and exports is object', function (){
        Tokens.TokenType.should.be.type('object');
    });
});
