import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StatisticsService } from '../services/statistics.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
  <h2>Reactive Stats Analyzer</h2>

  <input type="number" [(ngModel)]="input" placeholder="Enter number" />
  <button (click)="submit()">Add</button>
  <button (click)="reset()">Reset</button>

  @if (stats.count() > 0) {
    <div>
      <p><strong>Count:</strong> {{ stats.count() }}</p>
      <p><strong>Mean:</strong> {{ stats.mean().toFixed(2) }}</p>
      <p><strong>Variance:</strong> {{ stats.variance().toFixed(2) }}</p>
    </div>
  } @else {
    <p>No data yet — add some numbers!</p>
  }

  <h3>History</h3>
  <ul>
    <li *ngFor="let val of stats.data()">{{ val }}</li>
  </ul>
`
})
export class StatisticsComponent {
  input = 0;
  constructor(public stats: StatisticsService){

  }
  submit(){
    this.stats.add(this.input);
    this.input = 0;
  }
  reset() {
    this.stats.reset();
  }

}
