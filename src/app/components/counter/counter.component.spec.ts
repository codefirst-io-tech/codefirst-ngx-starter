import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { CounterComponent } from './counter.component';
import { decrement, increment, reset } from './counter.actions';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  let store: MockStore;
  const initialState = { count: 5 };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ],
      providers: [
        provideMockStore({ initialState })
      ]
    })
    .compileComponents();

    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render initial store data correctly', () => {
    const countText = fixture.debugElement.nativeElement.querySelector('div>div').textContent;
    expect(countText).toContain(initialState.count);
  });

  it('should call increase action correct times', () => {
    const dispatchSpy = spyOn(store, 'dispatch').and.callThrough();

    store.dispatch(increment());
    store.dispatch(increment());

    expect(dispatchSpy).toHaveBeenCalledWith(increment());
    expect(store.dispatch).toHaveBeenCalledTimes(2);

    store.scannedActions$.subscribe(action => {
      expect(action).toEqual({ type: '[Counter Component] Increment' });
    });
  });

  it('should call decrease action correct times', () => {
    const dispatchSpy = spyOn(store, 'dispatch').and.callThrough();

    store.dispatch(decrement());

    expect(dispatchSpy).toHaveBeenCalledWith(decrement());
    expect(store.dispatch).toHaveBeenCalledTimes(1);

    store.scannedActions$.subscribe(action => {
      expect(action).toEqual({ type: '[Counter Component] Decrement' });
    });
  });

  it('should call reset action correct times', () => {
    const dispatchSpy = spyOn(store, 'dispatch').and.callThrough();

    store.dispatch(reset());

    expect(dispatchSpy).toHaveBeenCalledWith(reset());
    expect(store.dispatch).toHaveBeenCalledTimes(1);

    store.scannedActions$.subscribe(action => {
      expect(action).toEqual({ type: '[Counter Component] Reset' });
    });
  });

  it('when count is set to 0 count must be equal to 0', () => {
    store.setState({ count: 0 });

    component.count$.subscribe(count => {
      expect(count).toEqual(0);
    });
  });
});
