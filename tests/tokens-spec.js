/**
 * Created by Newton on 2014/4/25.
 */
var fs = require('fs'),
    path = require('path'),
    should = require('should'),
    libdir = process.env.CMD_COVERAGE ? '../lib-cov' : '../lib',
    assetsdir = path.join(__dirname, 'assets'),
    Tokens = require(libdir + '/tokens'),
    TokenType = require(libdir + '/token-type');

describe('Tokens', function (){
    it('tokens should be array', function (){
        var tokens = new Tokens('/* base.css */body { color: red; }');
        tokens.should.be.instanceOf(Array);
    });

    it('empty string should be return []', function (){
        var tokens = new Tokens('');
        tokens.should.be.instanceOf(Array);
        tokens.length.should.equal(0);
    });

    it('non string should be return []', function (){
        var tokens = new Tokens(null);
        tokens.should.be.instanceOf(Array);
        tokens.length.should.equal(0);
    });

    it('base.css\'s tokens should be equal base.json', function (){
        var basecss = fs.readFileSync(path.join(assetsdir, 'base.css'), 'utf8'),
            basejson = fs.readFileSync(path.join(assetsdir, 'base.json'), 'utf8'),
            tokens = new Tokens(basecss);

        should.deepEqual(tokens, JSON.parse(basejson));
    });

    it('token type should be readonly', function (){
        TokenType.Tab = 'Rewrite';

        TokenType.Tab.should.equal('Tab');

        delete TokenType.Newline;

        TokenType.Newline.should.equal('Newline');
    });
});