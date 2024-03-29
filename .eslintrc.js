module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["eslint:recommended", "airbnb-base"],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
      "comma-dangle": ["error", "never"],
      "arrow-body-style": ["error", "as-needed"]
    },
};

