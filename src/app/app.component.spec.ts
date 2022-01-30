import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { AppComponent } from './app.component';
import { CounterComponentModule } from './components/counter/counter.component';
import { ModalComponentModule } from './components/modal/modal.component';

describe('AppComponent', () => {
  let store: MockStore;
  const initialState = { count: 2 };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, ModalComponentModule, CounterComponentModule],
      declarations: [AppComponent],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();

    /* eslint-disable unused-imports/no-unused-vars */
    store = TestBed.inject(MockStore);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'codefirst-ngx-starter'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('codefirst-ngx-starter');
  });
});
