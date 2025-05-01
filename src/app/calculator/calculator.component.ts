import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculatorService } from '../services/calculator.service';

@Component({
  imports: [FormsModule],
  standalone: true,
  template: `<h2>Calculator</h2>
    <input type="number" [(ngModel)]="x" />
    <input type="number" [(ngModel)]="y" />

  <button (click)="add()">Add</button>
  <button (click)="substract()">Substract</button>

  <p>Result: {{ calculator.value() }}</p>

  `

})
export class CalculatorComponent {
  x = 0;
  y = 0;

substract() {
  this.calculator.subtract(this.x, this.y);
}
add() {
  this.calculator.add(this.x, this.y);
}
constructor(public calculator: CalculatorService){}

}
