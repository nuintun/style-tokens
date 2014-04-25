/**
 * Created by Newton on 2014/4/25.
 */
var Tokens = require('./lib/tokens'),
    TokenType = require('./lib/token-type');

module.exports = {
    Parse: function (css, options){
        return new Tokens(css, options);
    },
    TokenType: TokenType
};