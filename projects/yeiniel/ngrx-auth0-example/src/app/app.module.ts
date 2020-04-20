import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgrxAuth0Module } from '@yeiniel/ngrx-auth0';
import { EffectsModule } from '@ngrx/effects';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),

    NgrxAuth0Module.forRoot({
      domain: 'xxxxx.auth0.com',
      client_id: 'yyyyyyyyyy',
      redirect_uri: `${window.location.origin}`,
      audience: 'zzzzzzzzzz'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
