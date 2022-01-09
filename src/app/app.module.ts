import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { counterReducer } from './components/counter/counter.reducer';
import { CounterComponentModule } from './components/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(
      {
        count: counterReducer
      },
      {}
    ),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    CounterComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
