module.exports = {
  "extends": "stylelint-config-standard",
  "rules": {
    "max-nesting-depth": 4,
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["extend", "import-normalize"]
      }
    ]
  }
}
