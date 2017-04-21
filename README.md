style-tokens
==========

>A tools can parse css text to css tokens
>
>[![NPM Version][npm-image]][npm-url]
>[![Download Status][download-image]][npm-url]
>[![Travis Status][travis-image]][travis-url]
>[![Test Coverage][coveralls-image]][coveralls-url]
>[![Dependencies][david-image]][david-url]

### Reference : 
>Modify from csso: [https://github.com/css/csso](https://github.com/css/csso)

### Install
```
$ npm install style-tokens
```

### Introduction:
>Use:

```js
var tokens,
  Tokens = require('style-tokens'),
  csstext = '/* base.css */body { color: red; }';

tokens = Tokens.Parse(csstext); // parse css

console.log(Tokens.TokenType); // all tokens's type, the value is readonly

console.log(tokens);
```

>Tokens output:

```js
[
  {
    "index": 0,
    "type": "CommentML",
    "value": "/* base.css */",
    "start": {
      "line": 1,
      "column": 1
    },
    "end": {
      "line": 1,
      "column": 14
    }
  },
  {
    "index": 1,
    "type": "Identifier",
    "value": "body",
    "start": {
      "line": 1,
      "column": 15
    },
    "end": {
      "line": 1,
      "column": 18
    }
  },
  {
    "index": 2,
    "type": "Space",
    "value": " ",
    "start": {
      "line": 1,
      "column": 19
    },
    "end": {
      "line": 1,
      "column": 19
    }
  },
  {
    "index": 3,
    "type": "LeftCurlyBracket",
    "value": "{",
    "start": {
      "line": 1,
      "column": 20
    },
    "end": {
      "line": 1,
      "column": 20
    },
    "right": 11
  },
  {
    "index": 4,
    "type": "Space",
    "value": " ",
    "start": {
      "line": 1,
      "column": 21
    },
    "end": {
      "line": 1,
      "column": 21
    }
  },
  {
    "index": 5,
    "type": "Identifier",
    "value": "color",
    "start": {
      "line": 1,
      "column": 22
    },
    "end": {
      "line": 1,
      "column": 26
    }
  },
  {
    "index": 6,
    "type": "Colon",
    "value": ":",
    "start": {
      "line": 1,
      "column": 27
    },
    "end": {
      "line": 1,
      "column": 27
    }
  },
  {
    "index": 7,
    "type": "Space",
    "value": " ",
    "start": {
      "line": 1,
      "column": 28
    },
    "end": {
      "line": 1,
      "column": 28
    }
  },
  {
    "index": 8,
    "type": "Identifier",
    "value": "red",
    "start": {
      "line": 1,
      "column": 29
    },
    "end": {
      "line": 1,
      "column": 31
    }
  },
  {
    "index": 9,
    "type": "Semicolon",
    "value": ";",
    "start": {
      "line": 1,
      "column": 32
    },
    "end": {
      "line": 1,
      "column": 32
    }
  },
  {
    "index": 10,
    "type": "Space",
    "value": " ",
    "start": {
      "line": 1,
      "column": 33
    },
    "end": {
      "line": 1,
      "column": 33
    }
  },
  {
    "index": 11,
    "type": "RightCurlyBracket",
    "value": "}",
    "start": {
      "line": 1,
      "column": 34
    },
    "end": {
      "line": 1,
      "column": 34
    },
    "left": 3
  }
]
```

[travis-image]: http://img.shields.io/travis/nuintun/style-tokens.svg?style=flat-square
[travis-url]: https://travis-ci.org/nuintun/style-tokens
[coveralls-image]: http://img.shields.io/coveralls/nuintun/style-tokens/master.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/nuintun/style-tokens?branch=master
[david-image]: http://img.shields.io/david/nuintun/style-tokens.svg?style=flat-square
[david-url]: https://david-dm.org/nuintun/style-tokens
[npm-image]: http://img.shields.io/npm/v/style-tokens.svg?style=flat-square
[npm-url]: https://www.npmjs.org/package/style-tokens
[download-image]: http://img.shields.io/npm/dm/style-tokens.svg?style=flat-square
