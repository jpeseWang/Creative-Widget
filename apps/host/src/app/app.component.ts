import { Component } from '@angular/core';
import { environment } from '../environments/environment';
@Component({
  selector: 'cwp-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'host';

  constructor() {
    console.log(environment.production);
  }
}
