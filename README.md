# Angular Elements - Calculator

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.0.

## 1. Install Angular elements
```
ng add @angular/elements
```

## 2. Install Concat
```
npm install concat
```

## 3. Create a script to concat files
```
const concat = require('concat');

(async function build() {
    const files = [
        './dist/angular-elements/runtime.js',
        './dist/angular-elements/polyfills.js',
        './dist/angular-elements/main.js'
    ]

    await concat(files, './dist/angular-elements/calculator.js');
})()
```

## 4. Remove bootstrap and add entryComponents in app.module
```
...
imports: [
  BrowserModule,
  AppRoutingModule,
  FormsModule
],
providers: [],
entryComponents: [CalculatorComponent],
bootstrap: []
...

```

## 5. Implement DoBootstrap interface and use ngDoBootstrap method to create the element
```
...
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const element = createCustomElement(CalculatorComponent, { injector: this.injector });
    customElements.define('app-calculator', element)
  }
}
```

## 6. Build
```
  1. ng build --prod --output-hashing none
  2. node build-script
```

## Demo
```
<app-calculator firstnumber="57"
                secondnumber="105"
                operator="*"></app-calculator>
```
