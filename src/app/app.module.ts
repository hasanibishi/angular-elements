import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [CalculatorComponent],
  bootstrap: []
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const element = createCustomElement(CalculatorComponent, { injector: this.injector });
    customElements.define('app-calculator', element)
  }

}
