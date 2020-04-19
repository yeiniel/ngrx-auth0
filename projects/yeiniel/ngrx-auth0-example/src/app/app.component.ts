import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginAction, logoutAction, isLoggedInSelector } from '@yeiniel/ngrx-auth0';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isLoggedIn$: Observable<boolean>;

  constructor(protected store: Store) {
    this.isLoggedIn$ = this.store.select(isLoggedInSelector);
  }

  onLoginClick() {
    this.store.dispatch(loginAction());
  }

  onLogoutClick() {
    this.store.dispatch(logoutAction());
  }
}
