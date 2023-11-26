module.exports = {
    
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        // outras extensões...
        'next',
    'next/core-web-vitals',
        'plugin:@typescript-eslint/recommended', // Se estiver usando TypeScript
        // outras extensões...
      ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/no-this-alias":"off",
        "@typescript-eslint/no-unused-vars":"off",
        "@typescript-eslint/no-var-requires":"off",
        "@typescript-eslint/ban-ts-comment":"off",
    },
    
}
