import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { loginAction, logoutAction } from '@yeiniel/ngrx-auth0';

import { AppComponent } from './app.component';
import {By} from "@angular/platform-browser";

describe('AppComponent', () => {
  let store: MockStore;
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        provideMockStore({
          initialState: {
            '@yeiniel/ngrx-auth0': {
              isLoggedIn: false
            }
          }
        })
      ]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;

    fixture.detectChanges();
  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('dispatch loginAction() when login button clicked', async(() => {
    const dispatchSpy = spyOn(store, 'dispatch');

    const buttonDe = fixture.debugElement.query(By.css('button#loginBtn'));

    buttonDe.nativeElement.click();

    fixture.whenStable().then(() => {
      expect(dispatchSpy).toHaveBeenCalledTimes(1);
      expect(dispatchSpy).toHaveBeenCalledWith(
        loginAction()
      );
    });
  }));

  it('dispatch logoutAction() when logout button clicked', async(() => {
    const dispatchSpy = spyOn(store, 'dispatch');

    store.setState({
      '@yeiniel/ngrx-auth0': {
        isLoggedIn: true
      }
    });

    fixture.detectChanges();

    const buttonDe = fixture.debugElement.query(By.css('button#logoutBtn'));

    buttonDe.nativeElement.click();

    fixture.whenStable().then(() => {
      expect(dispatchSpy).toHaveBeenCalledTimes(1);
      expect(dispatchSpy).toHaveBeenCalledWith(
        logoutAction()
      );
    });
  }));
});
