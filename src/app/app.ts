import {Component, inject, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Store} from '@ngrx/store';
import {increment} from '../store/counter.action';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{ title() }}!</h1>

    <h1>counter: {{counter()}}</h1>
    <button (click)="inc()">+</button>

    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('ngrx-demo');

  store = inject(Store);
  counter = this.store.selectSignal(state => state.counter.value)

  inc() {
    this.store.dispatch(increment());
  }
}
