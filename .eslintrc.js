module.exports = {
    
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        // outras extensões...
        
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
    },
    
}
