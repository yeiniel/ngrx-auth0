# NgrxAuth0

NgrxAuth0 is an [Angular](https://angular.io) module that provides 
authentication using [Auth0](https://auth0.com) and implements its interface in 
the form of an NgRx store feature.

## Installation 
The module can be installed using the following command:

```bash
npm install @yeiniel/ngrx-auth0 --save
```

## Usage
Once the module has been installed you can add it as a dependency of the app 
module as follows:

```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { NgrxAuth0Module } from '@yeiniel/ngrx-auth0';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot(),
    NgrxAuth0Module.forRoot({
      domain: 'xxxx.auth0.com',
      client_id: 'yyyyyyyy',
      redirect_uri: `${window.location.origin}`,
      audience: 'zzzzzzzzzzz'
    })
  ],
  providers: [],
  bootstrap: [...]
})
export class AppModule { }
```

Once the application has been configured to use the module there are tree 
artifacts that can be used to interact with it:

 - the isLoggedIn selector used to select the login state from the store
 - the login action used to initiate the login flow and redirecting to 
   [Auth0](https://auth0.com).
 - the logout action

The following code is an example of a component that implement the UI used to
interact with the module features:

```js
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginAction, logoutAction, isLoggedInSelector, profileSelector } from '@yeiniel/ngrx-auth0';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <ng-container [ngSwitch]="isLoggedIn$ | async">
      <button id="loginBtn" *ngSwitchCase="false" (click)="onLoginClick()">login</button>
      <button id="logoutBtn" *ngSwitchCase="true" (click)="onLogoutClick()">logout</button>
    </ng-container>

    {{ profile$ | async }}
  `
})
export class AppComponent {

  isLoggedIn$: Observable<boolean>;

  profile$: Observable<any>;

  constructor(protected store: Store) {
    this.isLoggedIn$ = this.store.select(isLoggedInSelector);
    this.profile$ = this.store.select(profileSelector);
  }

  onLoginClick() {
    this.store.dispatch(loginAction());
  }

  onLogoutClick() {
    this.store.dispatch(logoutAction());
  }
}
```
