import { Component } from '@angular/core';
import { Observable } from 'windowed-observable';

@Component({
  selector: 'nx-micro-frontend-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'menu';

  navigate(path: string) {
    const observable = new Observable('menu');
    observable.publish(path);
  }
}
