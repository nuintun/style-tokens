/**
 * Created by Newton on 2014/4/23.
 */
var EOL = require('os').EOL,
    TokenType = require('./token-type'),
    Punctuation = require('./punctuation'),
    blockhooks = {
        '{': '}',
        '[': ']',
        '(': ')'
    };

function Tokens(css){
    this.pos = 0;
    this.index = 0;
    this.tokens = [];
    this.blockMode = [];
    this.urlMode = {
        prep: false,
        ready: false
    };
    this.start = {
        line: 1,
        column: 0
    };
    this.end = {
        line: 1,
        column: 0
    };
    return this.getTokens(css);
}

Tokens.prototype = {
    getTokens: function (css){
        var c, cp, cn,
            that = this,
            tokens = that.tokens;

        if (!css) return tokens;

        for (that.pos; that.pos < css.length; that.pos++) {
            c = css.charAt(that.pos);
            cp = css.charAt(that.pos - 1);
            cn = css.charAt(that.pos + 1);

            if (c + cn === '/*') {
                that.parseMLComment(css);
            } else if (!that.urlMode.ready && c + cn === '//') {
                that.parseSLComment(css);
            } else if (c === '"' || c === "'") {
                that.parseString(css, c);
            } else if (c === ' ') {
                that.parseSpaces(css);
            } else if (c in Punctuation) {
                if (c === '\\') {
                    if (cn === ' ' || cn === '\r' || cn === '\n' || cn === '\t') {
                        that.parsePunctuation(c, cp);
                    } else {
                        that.parseIdentifier(css);
                    }
                } else {
                    that.parsePunctuation(c, cp);
                }
            } else if (that.isDecimalDigit(c)) {
                that.parseDecimalNumber(css);
            } else {
                that.parseIdentifier(css);
            }
        }

        return tokens;
    },
    isDecimalDigit: function (css){
        return '0123456789'.indexOf(css) >= 0;
    },
    pushToken: function (type, value){
        var that = this,
            tokens = that.tokens;

        if (!value.length) return;

        tokens.push({
            index: that.index++,
            type: type,
            value: value,
            start: {
                line: that.start.line,
                column: that.start.column + 1
            },
            end: {
                line: that.end.line,
                column: that.end.column + 1
            }
        });
    },
    parseMLComment: function (css){
        var c, cp, cn,
            that = this,
            start = that.pos;

        that.end.column += 2;

        for (that.pos += 2; that.pos < css.length; that.pos++) {
            c = css.charAt(that.pos);
            cp = css.charAt(that.pos - 1);
            cn = css.charAt(that.pos + 1);

            if (c + cn == '*/') {
                that.end.column++;
                that.pos++;
                break;
            } else {
                if (c === EOL || cp + c === EOL) {
                    that.end.column = 0;
                    that.end.line++;
                } else {
                    that.end.column++;
                }
            }
        }

        that.pushToken(TokenType.CommentML, css.substring(start, that.pos + 1));
        that.start.line = that.end.line;
        that.start.column = ++that.end.column;
    },
    parseSLComment: function (css){
        var c, that = this,
            start = that.pos;

        that.end.column += 2;

        for (that.pos += 2; that.pos < css.length; that.pos++) {
            c = css.charAt(that.pos);

            if (c !== '\r' && c !== '\n') {
                that.end.column++;
            } else {
                break;
            }
        }

        that.end.column--;
        that.pushToken(TokenType.CommentSL, css.substring(start, that.pos--));
        that.start.column = ++that.end.column;
    },
    parseString: function (css, char){
        var c, type,
            that = this,
            start = that.pos;

        that.end.column++;

        for (that.pos += 1; that.pos < css.length; that.pos++) {
            c = css.charAt(that.pos);

            if (c !== '\r' && c !== '\n') {
                that.end.column++;
                if (c === char) break;
            } else {
                that.pos = start;
                that.end.column = that.start.column;
                that.pushToken(Punctuation[char], char);
                that.start.column = ++that.end.column;
                return;
            }
        }

        that.end.column--;
        type = char === '"' ? TokenType.StringDQ : TokenType.StringSQ;
        that.pushToken(type, css.substring(start, that.pos + 1));
        that.start.column = ++that.end.column;
    },
    parseSpaces: function (css){
        var that = this,
            start = that.pos;

        for (; that.pos < css.length; that.pos++) {
            if (css.charAt(that.pos) !== ' ') {
                break;
            } else {
                that.end.column++;
            }
        }

        that.end.column--;
        that.pushToken(TokenType.Space, css.substring(start, that.pos--));
        that.start.column = ++that.end.column;
    },
    parsePunctuation: function (c, cp){
        var left, that = this,
            tokens = that.tokens;

        if (c === '{' || c === '[' || c === '(') {
            that.blockMode.push({
                char: c,
                index: that.index
            });
        }

        if (that.urlMode.prep && !that.urlMode.ready) {
            that.urlMode.prep = c !== '/';
            that.urlMode.ready = c === '(';
        }

        that.pushToken(Punctuation[c], c);

        if (c === ')') {
            that.urlMode.prep = false;
            that.urlMode.ready = false;
        }

        if (c === '}' || c === ']' || c === ')') {
            left = that.blockMode.pop();

            while (left && c !== blockhooks[left.char]) {
                left = that.blockMode.pop();
            }

            if (left) {
                tokens[left.index].right = that.index - 1;
                tokens[that.index - 1].left = left.index;
            }
        }

        if (c === EOL || cp + c === EOL) {
            that.start.column = 0;
            that.end.column = 0;
            that.start.line = ++that.end.line;
        } else {
            that.start.column = ++that.end.column;
        }
    },
    parseDecimalNumber: function (css){
        var c, that = this,
            start = that.pos;

        for (; that.pos < css.length; that.pos++) {
            c = css.charAt(that.pos);
            if (!that.isDecimalDigit(c)) {
                break;
            } else {
                that.end.column++;
            }
        }

        that.end.column--;
        that.pushToken(TokenType.DecimalNumber, css.substring(start, that.pos--));
        that.start.column = ++that.end.column;
    },
    parseIdentifier: function (css){
        var c, ident,
            that = this,
            start = that.pos;

        for (; that.pos < css.length; that.pos++) {
            c = css.charAt(that.pos);

            if (c === '\\') {
                that.pos++;
                that.end.column += 2;
            } else if (c in Punctuation) {
                break;
            } else {
                that.end.column++;
            }
        }

        that.end.column--;
        ident = css.substring(start, that.pos--);
        that.urlMode.prep = ident === 'url';
        that.pushToken(TokenType.Identifier, ident);
        that.start.column = ++that.end.column;
    }
};

module.exports = Tokens;