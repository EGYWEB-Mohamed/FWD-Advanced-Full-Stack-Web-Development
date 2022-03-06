# **Lesson 2**

## NPM Packages

```JavaScript
npm init
npm i --save-dev prettie
npm i --save-dev eslint
npm i --save-dev eslint-config-prettier
npm i --save-dev eslint-plugin-prettier
```

---

## Important Script To To Add To _package.json_

```JavaScript
"lint": "eslint 'index.js'",
"prettier": "prettier --config .prettierrc '*.js' --write"
```

---

## Some Configrations

- create new file Called ( .prettierrc )

```js
{
  "semi": false,
  "singleQuote": true,
  "printWidth": 100,
  "bracketSpacing": true,
  "tabWidth": 2,
  "trailingComma": "none"
}
```

---

## _package.json_ Should be Like

```js
  "name": "#####",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "lint": "eslint 'index.js'",
    "prettier": "prettier --config .prettierrc '*.js' --write"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "eslint": "^8.10.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-prettier": "^4.0.0",
    "prettier": "^1.19.1"
  }
}
```
