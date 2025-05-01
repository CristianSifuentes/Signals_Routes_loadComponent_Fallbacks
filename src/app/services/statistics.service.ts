import { Injectable, signal, computed, effect } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StatisticsService {
  private values = signal<number[]>([]);

  count = computed(() => this.values().length);

  mean = computed(() => {
    const vals = this.values();
    return vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : 0;
  });

  variance = computed(() => {
    const vals = this.values();
    const mu = this.mean();
    return vals.length
      ? vals.reduce((acc, x) => acc + Math.pow(x - mu, 2), 0) / vals.length
      : 0;
  });

  constructor() {
    effect(() => {
      console.log(`Count: ${this.count()}, Mean: ${this.mean().toFixed(2)}, Variance: ${this.variance().toFixed(2)}`);
    });
  }

  add(value: number) {
    this.values.update(v => [...v, value]);
  }

  reset() {
    this.values.set([]);
  }

  get data() {
    return this.values;
  }
}
