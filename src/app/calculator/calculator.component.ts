import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  private _firstNumber!: string;
  private _secondNumber!: string;
  private _operator!: string;

  @Input('firstnumber') set firstNumber(value: string) {
    this._firstNumber = value;
    this.calculate();
  };

  get firstNumber() {
    return this._firstNumber;
  }

  @Input('secondnumber') set secondNumber(value: string) {
    this._secondNumber = value;
    this.calculate();
  };

  get secondNumber() {
    return this._secondNumber;
  }

  @Input() set operator(value: string) {
    if (!value) value = '+';

    if (value === '+' || value === '-' || value === '*' || value === '/') {
      this._operator = value;
      this.calculate();
    }
  };

  get operator() {
    return this._operator;
  }

  result: number = 0;

  constructor() { }

  ngOnInit() { }

  calculate() {
    if (this.firstNumber && this.secondNumber) {

      switch (this.operator) {
        case '+':
          this.result = Number(this.firstNumber) + Number(this.secondNumber);
          break;

        case '-':
          this.result = Number(this.firstNumber) - Number(this.secondNumber);
          break;

        case '*':
          this.result = Number(this.firstNumber) * Number(this.secondNumber);
          break;

        case '/':
          this.result = Number(this.firstNumber) / Number(this.secondNumber);
          break;

        default:
          this.result = Number(this.firstNumber) + Number(this.secondNumber);
          break;
      }
    }
  }
}
