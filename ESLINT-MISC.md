# ESLINT STUFF


### order of keys ?
- parser, extends, parserOptions, rules

### configs, rule-sets:


### configs:
airbnb
standard
steelbrain
prettier

### plugins:
@typescript-eslint
import
jsx-a11y
mocha
node
prettier
promise
react
react-hooks
standard
----
react-app (meh!)
cypress
flowtype






### typescript

`$ yarn add -D @typescript-eslint/parser`
`$ yarn add -D @typescript-eslint/eslint-plugin`
will allow ALL of the following ESLINT configs:
```json
{
  "parser": "@typescript-eslint/parser",
  "extends": ["plugin:@typescript-eslint/recommended"],
  "plugins": ["@typescript-eslint"],
  "rules": {
    "@typescript-eslint/rule-name": "error"
  }
}
```

- @typescript-eslint/parser: The parser that will allow ESLint to lint TypeScript code
- @typescript-eslint/eslint-plugin: A
