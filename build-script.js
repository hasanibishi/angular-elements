const concat = require('concat');

(async function build() {
    const files = [
        './dist/angular-elements/runtime.js',
        './dist/angular-elements/polyfills.js',
        './dist/angular-elements/main.js'
    ]

    await concat(files, './dist/angular-elements/calculator.js');
})()