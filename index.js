module.exports = require('./.eslintrc.js');


const miscExoticca = {
  "devDependencies": {
    "babel-eslint": "^10.0.1",
    "babel-jest": "^23.6.0",
    "casual": "^1.5.19",
    "cross-env": "^5.0.5",
    "dotenv-safe": "^6.1.0",
    "eslint": "^5.10.0",
    "eslint-config-airbnb": "^17.1.0",
    "eslint-config-standard": "12.0.0",
    "eslint-config-steelbrain": "6.0.0",
    "eslint-plugin-import": "^2.9.0",
    "eslint-plugin-promise": "^4.0.1",
    "eslint-plugin-standard": "^4.0.0",
  }
}


const miscRC = {
  "parser": "@typescript-eslint/parser",
  "extends": [
    "react-app",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "prettier/babel",
    "prettier/react"
  ],
  "plugins": [
    "@typescript-eslint",
    "import",
    "jsx-a11y",
    "prettier",
    "react",
    "react-hooks"
  ],
  "rules": {
    "no-use-before-define": "off",
    "prettier/prettier": "error"
  }
}

const miscReactAdmin = {
  devDependencies: {
    "@typescript-eslint/eslint-plugin": "^1.9.0",
    "@typescript-eslint/parser": "^1.9.0",
    "eslint": "^5.16.0",
    "eslint-config-prettier": "^4.3.0",
    "eslint-plugin-cypress": "^2.2.1",
    "eslint-plugin-flowtype": "^3.9.1",
    "eslint-plugin-import": "^2.17.3",
    "eslint-plugin-jsx-a11y": "^6.2.1",
    "eslint-plugin-prettier": "^3.1.0",
    "eslint-plugin-react": "^7.13.0",
    "eslint-config-react-app": "^4.0.1",
    "eslint-plugin-react-hooks": "^1.6.0",
  },
  "parser": "@typescript-eslint/parser",
  "extends": [
    "react-app",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "prettier/babel",
    "prettier/react"
  ],
  "plugins": [
    "@typescript-eslint",
    "import",
    "jsx-a11y",
    "prettier",
    "react",
    "react-hooks"
  ],
  "rules": {
    "no-use-before-define": "off",
    "prettier/prettier": "error"
  }
}

const miscStandard = {
  "devDependencies": {
    "eslint": "^6.2.2",
    "eslint-plugin-import": "^2.18.0",
    "eslint-plugin-node": "^10.0.0",
    "eslint-plugin-promise": "^4.2.1",
    "eslint-plugin-standard": "^4.0.0",
  },
  "peerDependencies": {
    "eslint": ">=6.2.2",
    "eslint-plugin-import": ">=2.18.0",
    "eslint-plugin-node": ">=9.1.0",
    "eslint-plugin-promise": ">=4.2.1",
    "eslint-plugin-standard": ">=4.0.0"
  },
  "rules": {
    "accessor-pairs": "error",
    "array-bracket-spacing": ["error", "never"],
    "arrow-spacing": ["error", {
      "before": true,
      "after": true
    }],
    "block-spacing": ["error", "always"],
    "brace-style": ["error", "1tbs", {
      "allowSingleLine": true
    }],
    "camelcase": ["error", {
      "properties": "never"
    }],
    "comma-dangle": ["error", {
      "arrays": "never",
      "objects": "never",
      "imports": "never",
      "exports": "never",
      "functions": "never"
    }],
    "comma-spacing": ["error", {
      "before": false,
      "after": true
    }],
    "comma-style": ["error", "last"],
    "computed-property-spacing": ["error", "never"],
    "constructor-super": "error",
    "curly": ["error", "multi-line"],
    "dot-location": ["error", "property"],
    "dot-notation": ["error", {
      "allowKeywords": true
    }],
    "eol-last": "error",
    "eqeqeq": ["error", "always", {
      "null": "ignore"
    }],
    "func-call-spacing": ["error", "never"],
    "generator-star-spacing": ["error", {
      "before": true,
      "after": true
    }],
    "handle-callback-err": ["error", "^(err|error)$"],
    "indent": ["error", 2, {
      "SwitchCase": 1,
      "VariableDeclarator": 1,
      "outerIIFEBody": 1,
      "MemberExpression": 1,
      "FunctionDeclaration": {
        "parameters": 1,
        "body": 1
      },
      "FunctionExpression": {
        "parameters": 1,
        "body": 1
      },
      "CallExpression": {
        "arguments": 1
      },
      "ArrayExpression": 1,
      "ObjectExpression": 1,
      "ImportDeclaration": 1,
      "flatTernaryExpressions": false,
      "ignoreComments": false,
      "ignoredNodes": ["TemplateLiteral *"]
    }],
    "key-spacing": ["error", {
      "beforeColon": false,
      "afterColon": true
    }],
    "keyword-spacing": ["error", {
      "before": true,
      "after": true
    }],
    "lines-between-class-members": ["error", "always", {
      "exceptAfterSingleLine": true
    }],
    "new-cap": ["error", {
      "newIsCap": true,
      "capIsNew": false,
      "properties": true
    }],
    "new-parens": "error",
    "no-array-constructor": "error",
    "no-async-promise-executor": "error",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-class-assign": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "error",
    "no-const-assign": "error",
    "no-constant-condition": ["error", {
      "checkLoops": false
    }],
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-delete-var": "error",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty-character-class": "error",
    "no-empty-pattern": "error",
    "no-eval": "error",
    "no-ex-assign": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-boolean-cast": "error",
    "no-extra-parens": ["error", "functions"],
    "no-fallthrough": "error",
    "no-floating-decimal": "error",
    "no-func-assign": "error",
    "no-global-assign": "error",
    "no-implied-eval": "error",
    "no-inner-declarations": ["error", "functions"],
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-iterator": "error",
    "no-labels": ["error", {
      "allowLoop": false,
      "allowSwitch": false
    }],
    "no-lone-blocks": "error",
    "no-misleading-character-class": "error",
    "no-prototype-builtins": "error",
    "no-useless-catch": "error",
    "no-mixed-operators": ["error", {
      "groups": [
        ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
        ["&&", "||"],
        ["in", "instanceof"]
      ],
      "allowSamePrecedence": true
    }],
    "no-mixed-spaces-and-tabs": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-multiple-empty-lines": ["error", {
      "max": 1,
      "maxEOF": 0
    }],
    "no-negated-in-lhs": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-require": "error",
    "no-new-symbol": "error",
    "no-new-wrappers": "error",
    "no-obj-calls": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-path-concat": "error",
    "no-proto": "error",
    "no-redeclare": ["error", {
      "builtinGlobals": false
    }],
    "no-regex-spaces": "error",
    "no-return-assign": ["error", "except-parens"],
    "no-self-assign": ["error", {
      "props": true
    }],
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow-restricted-names": "error",
    "no-sparse-arrays": "error",
    "no-tabs": "error",
    "no-template-curly-in-string": "error",
    "no-this-before-super": "error",
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-undef": "error",
    "no-undef-init": "error",
    "no-unexpected-multiline": "error",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": ["error", {
      "defaultAssignment": false
    }],
    "no-unreachable": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-unused-expressions": ["error", {
      "allowShortCircuit": true,
      "allowTernary": true,
      "allowTaggedTemplates": true
    }],
    "no-unused-vars": ["error", {
      "vars": "all",
      "args": "none",
      "ignoreRestSiblings": true
    }],
    "no-use-before-define": ["error", {
      "functions": false,
      "classes": false,
      "variables": false
    }],
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-escape": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-void": "error",
    "no-whitespace-before-property": "error",
    "no-with": "error",
    "object-curly-newline": ["error", {
      "multiline": true,
      "consistent": true
    }],
    "object-curly-spacing": ["error", "always"],
    "object-property-newline": ["error", {
      "allowMultiplePropertiesPerLine": true
    }],
    "one-var": ["error", {
      "initialized": "never"
    }],
    "operator-linebreak": ["error", "after", {
      "overrides": {
        "?": "before",
        ":": "before",
        "|>": "before"
      }
    }],
    "padded-blocks": ["error", {
      "blocks": "never",
      "switches": "never",
      "classes": "never"
    }],
    "prefer-const": ["error", {
      "destructuring": "all"
    }],
    "prefer-promise-reject-errors": "error",
    "quote-props": ["error", "as-needed"],
    "quotes": ["error", "single", {
      "avoidEscape": true,
      "allowTemplateLiterals": false
    }],
    "rest-spread-spacing": ["error", "never"],
    "semi": ["error", "never"],
    "semi-spacing": ["error", {
      "before": false,
      "after": true
    }],
    "space-before-blocks": ["error", "always"],
    "space-before-function-paren": ["error", "always"],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": "error",
    "space-unary-ops": ["error", {
      "words": true,
      "nonwords": false
    }],
    "spaced-comment": ["error", "always", {
      "line": {
        "markers": ["*package", "!", "/", ",", "="]
      },
      "block": {
        "balanced": true,
        "markers": ["*package", "!", ",", ":", "::", "flow-include"],
        "exceptions": ["*"]
      }
    }],
    "symbol-description": "error",
    "template-curly-spacing": ["error", "never"],
    "template-tag-spacing": ["error", "never"],
    "unicode-bom": ["error", "never"],
    "use-isnan": "error",
    "valid-typeof": ["error", {
      "requireStringLiterals": true
    }],
    "wrap-iife": ["error", "any", {
      "functionPrototypeMethods": true
    }],
    "yield-star-spacing": ["error", "both"],
    "yoda": ["error", "never"],

    "import/export": "error",
    "import/first": "error",
    "import/no-absolute-path": ["error", {
      "esmodule": true,
      "commonjs": true,
      "amd": false
    }],
    "import/no-duplicates": "error",
    "import/no-named-default": "error",
    "import/no-webpack-loader-syntax": "error",

    "node/no-deprecated-api": "error",
    "node/process-exit-as-throw": "error",

    "promise/param-names": "error",

    "standard/no-callback-literal": "error"
  }
};



const miscSemantic = {
  devDeps: {
    "eslint": "^4.12.1",
    "eslint-config-airbnb": "^15.1.0",
    "eslint-plugin-import": "^2.7.0",
    "eslint-plugin-jsx-a11y": "^5.1.1",
    "eslint-plugin-mocha": "^4.11.0",
    "eslint-plugin-react": "^7.2.1",
    "tslint-config-airbnb": "^5.11.0",
  },
  "rules": {
    "newline-per-chained-call": 0,
    "class-methods-use-this": 0,
    "consistent-return": 0,
    "complexity": [1, 10],
    "global-require": 0,
    "jsx-quotes": [2, "prefer-single"],
    "max-len": [2, 120, 4],
    "no-console": 2,
    "no-mixed-operators": 0,
    "no-multi-spaces": [2, {
      "ignoreEOLComments": true
    }],
    "no-return-assign": [2, "except-parens"],
    "no-underscore-dangle": 0,
    "padded-blocks": [2, {
      "blocks": "never",
      "switches": "never",
      "classes": "never"
    }],
    "semi": [2, "never"],
    "jsx-a11y/alt-text": 1,
    "jsx-a11y/label-has-for": 1,
    "jsx-a11y/no-static-element-interactions": 1,
    "jsx-a11y/role-has-required-aria-props": 1,
    "import/no-dynamic-require": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": 0,
    "import/no-webpack-loader-syntax": 0,
    "import/extensions": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-filename-extension": [2, {
      "extensions": [".js"]
    }],
    "react/no-unused-prop-types": 0,
    "react/sort-comp": 0,
    "react/require-default-props": 0
  },
}


const myRules = {
  "rules": {
    "strict": [0, "safe"],
    "no-debugger": 2,
    "brace-style": [2, "1tbs", {
      "allowSingleLine": true
    }],
    "no-trailing-spaces": 2,
    "keyword-spacing": 2,
    "space-before-function-paren": [2, "never"],
    "max-len": [0, 110, 2],
    "quotes": [1, "single"],
    "semi": [1, "always"],
    "spaced-comment": [1, "always"],
    "comma-dangle": 1,
    "guard-for-in": 2,
    "no-undef": 2,
    "no-undefined": 2,
    "no-eval": 2,
    "no-console": 0,
    "no-with": 2,
    "no-continue": 1,
    "no-extra-semi": 1,
    "no-unreachable": 1,
    "no-unused-expressions": 1,
    "no-case-declarations": 0,
    "no-magic-numbers": 0,
    "no-unused-vars": 0,
    "valid-typeof": 2,
    "vars-on-top": 2,
    "import/extensions": ["error", "never"],
    "import/no-unresolved": 2,
    "react/no-direct-mutation-state": 1,
    "react/no-unescaped-entities": 0,
    "react/jsx-no-target-blank": 2,
    "react/jsx-uses-vars": 0,
    "react/prop-types": 0,
    "react-hooks/rules-of-hooks": ["error", "never"],
    "react-hooks/exhaustive-deps": ["error", "never"]
  }
}
