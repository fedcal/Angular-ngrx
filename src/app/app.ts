import {Component, inject, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Store} from '@ngrx/store';
import {decrement, increment} from '../store/counter.action';
import {counterFeature} from '../store/counter.reducer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{ title() }}!</h1>

    <h1>counter: {{counter()}}</h1>
    <button (click)="inc()">+</button> <br/>
    <button (click)="dec()">-</button>

    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('ngrx-demo');

  store = inject(Store);
  counter = this.store.selectSignal(counterFeature.selectValue)

  inc() {
    this.store.dispatch(increment());
  }

  dec() {
    this.store.dispatch(decrement());
  }
}
