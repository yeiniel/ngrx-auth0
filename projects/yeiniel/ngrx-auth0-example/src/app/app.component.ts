import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginAction } from '@yeiniel/ngrx-auth0';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(protected store: Store) {}

  onLogin() {
    this.store.dispatch(loginAction());
  }
}
