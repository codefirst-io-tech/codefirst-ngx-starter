/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/omrumbakitemiz/codefirst-ngx-starter/blob/master/LICENSE
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponentModule } from './components/counter/counter.component';
import { counterReducer } from './components/counter/counter.reducer';
import { ModalComponentModule } from './components/modal/modal.component';

@NgModule({
  declarations: [AppComponent],
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
    ModalComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
