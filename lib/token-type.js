/**
 * Created by Newton on 2014/4/23.
 */
var TokenType = {};
Object.defineProperties(TokenType, {
  StringSQ: {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 'StringSQ'
  },
  StringDQ: {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 'StringDQ'
  },
  CommentML: {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 'CommentML'
  },
  CommentSL: {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 'CommentSL'
  },
  Newline: {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 'Newline'
  },
  Enter: {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 'Enter'
  },
  Space: {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 'Space'
  },
  Tab: {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 'Tab'
  },
  // !
  ExclamationMark: {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 'ExclamationMark'
  },
  // "
  QuotationMark: {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 'QuotationMark'
  },
  // #
  NumberSign: {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 'NumberSign'
  },
  // $
  DollarSign: {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 'DollarSign'
  },
  // %
  PercentSign: {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 'PercentSign'
  },
  // &
  Ampersand: {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 'Ampersand'
  },
  // '
  Apostrophe: {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 'Apostrophe'
  },
  // (
  LeftParenthesis: {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 'LeftParenthesis'
  },
  // )
  RightParenthesis: {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 'RightParenthesis'
  },
  // *
  Asterisk: {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 'Asterisk'
  },
  // +
  PlusSign: {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 'PlusSign'
  },
  // ,
  Comma: {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 'Comma'
  },
  // -
  HyphenMinus: {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 'HyphenMinus'
  },
  // .
  FullStop: {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 'FullStop'
  },
  // /
  Solidus: {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 'Solidus'
  },
  // :
  Colon: {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 'Colon'
  },
  // ;
  Semicolon: {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 'Semicolon'
  },
  // <
  LessThanSign: {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 'LessThanSign'
  },
  // =
  EqualsSign: {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 'EqualsSign'
  },
  // >
  GreaterThanSign: {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 'GreaterThanSign'
  },
  // ?
  QuestionMark: {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 'QuestionMark'
  },
  // @
  CommercialAt: {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 'CommercialAt'
  },
  // [
  LeftSquareBracket: {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 'LeftSquareBracket'
  },
  // \
  ReverseSolidus: {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 'ReverseSolidus'
  },
  // ]
  RightSquareBracket: {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 'RightSquareBracket'
  },
  // ^
  CircumflexAccent: {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 'CircumflexAccent'
  },
  // _
  LowLine: {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 'LowLine'
  },
  // {
  LeftCurlyBracket: {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 'LeftCurlyBracket'
  },
  // |
  VerticalLine: {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 'VerticalLine'
  },
  // }
  RightCurlyBracket: {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 'RightCurlyBracket'
  },
  // ~
  Tilde: {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 'Tilde'
  },
  Identifier: {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 'Identifier'
  },
  DecimalNumber: {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 'DecimalNumber'
  }
});

module.exports = TokenType;