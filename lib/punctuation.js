/**
 * Created by Newton on 2014/4/23.
 */
var TokenType = require('./token-type'),
  Punctuation = {
    ' ': TokenType.Space,
    '\n': TokenType.Newline,
    '\r': TokenType.Enter,
    '\t': TokenType.Tab,
    '!': TokenType.ExclamationMark,
    '"': TokenType.QuotationMark,
    '#': TokenType.NumberSign,
    '$': TokenType.DollarSign,
    '%': TokenType.PercentSign,
    '&': TokenType.Ampersand,
    '\'': TokenType.Apostrophe,
    '(': TokenType.LeftParenthesis,
    ')': TokenType.RightParenthesis,
    '*': TokenType.Asterisk,
    '+': TokenType.PlusSign,
    ',': TokenType.Comma,
    '-': TokenType.HyphenMinus,
    '.': TokenType.FullStop,
    '/': TokenType.Solidus,
    ':': TokenType.Colon,
    ';': TokenType.Semicolon,
    '<': TokenType.LessThanSign,
    '=': TokenType.EqualsSign,
    '>': TokenType.GreaterThanSign,
    '?': TokenType.QuestionMark,
    '@': TokenType.CommercialAt,
    '[': TokenType.LeftSquareBracket,
    '\\': TokenType.ReverseSolidus,
    ']': TokenType.RightSquareBracket,
    '^': TokenType.CircumflexAccent,
    '_': TokenType.LowLine,
    '{': TokenType.LeftCurlyBracket,
    '|': TokenType.VerticalLine,
    '}': TokenType.RightCurlyBracket,
    '~': TokenType.Tilde
  };

module.exports = Punctuation;