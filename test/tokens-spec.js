/**
 * Created by Newton on 2014/4/25.
 */
var fs = require('fs'),
  path = require('path'),
  should = require('should'),
  assetsdir = path.join(__dirname, 'assets'),
  Tokens = require('../lib/tokens'),
  TokenType = require('../lib/token-type');

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

  it('compressed.css\'s tokens should be equal compressed.json', function (){
    var basecss = fs.readFileSync(path.join(assetsdir, 'compressed.css'), 'utf8'),
      basejson = fs.readFileSync(path.join(assetsdir, 'compressed.json'), 'utf8'),
      tokens = new Tokens(basecss);

    should.deepEqual(tokens, JSON.parse(basejson));
  });

  it('uncompressed.css\'s tokens should be equal uncompressed.json', function (){
    var basecss = fs.readFileSync(path.join(assetsdir, 'uncompressed.css'), 'utf8'),
      basejson = fs.readFileSync(path.join(assetsdir, 'uncompressed.json'), 'utf8'),
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