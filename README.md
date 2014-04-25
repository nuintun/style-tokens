Css-Tokens
==========

>A tools can parse css text to css tokens

>[![Build Status](https://travis-ci.org/Nuintun/css-tokens.svg?branch=master)](https://travis-ci.org/Nuintun/css-tokens)
>[![Coverage Status](https://coveralls.io/repos/Nuintun/css-tokens/badge.png)](https://coveralls.io/r/Nuintun/css-tokens)

###Reference : 
>Modify from csso: [https://github.com/css/csso](https://github.com/css/csso)

###Install
```
$ npm install css-tokens
```

###Introduction:
>Use:

```js
var tokens,
    Tokens = require('tokens'),
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
