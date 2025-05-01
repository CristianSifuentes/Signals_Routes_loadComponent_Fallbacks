import { Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private result = signal(0);

  get value(){
    return this.result;
  }
  add(x: number, y: number){
    const sum = x + y;
    this.log(`Adding: ${x} + ${y} = ${sum}`);
    this.result.set(sum);
  }
  subtract(x: number, y: number){
    const diff = x - y;
    this.log(`Subtracting: ${x} - ${y} = ${diff}`);
    this.result.set(diff);

  }
  private log(message: string) {
    if (!environment.production) {
      console.log(`[DEV LOG] ${message}`);
    }
  }
}
