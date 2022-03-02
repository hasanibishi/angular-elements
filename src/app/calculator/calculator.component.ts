import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  private _firstNumber!: string;
  private _secondNumber!: string;
  private _operator!: string;
  result!: number;
  @Output('getResult') outputResult = new EventEmitter<string>()

  @Input('firstnumber') set firstNumber(value: string) {
    this._firstNumber = value;
  };

  get firstNumber() {
    return this._firstNumber;
  }

  @Input('secondnumber') set secondNumber(value: string) {
    this._secondNumber = value;
  };

  get secondNumber() {
    return this._secondNumber;
  }

  @Input() set operator(value: string) {
    this._operator = value;
  };

  get operator() {
    return this._operator;
  }

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

      this.outputResult.emit(this.result.toString());
    }

    else {
      alert('Please add the first number and second number!')
    }
  }
}
