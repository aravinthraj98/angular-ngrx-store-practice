import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { tutorialReducer } from 'src/Reducer/tutorial.reducer';
import { ReadComponent } from './components/read/read.component';
import { TestReducer } from 'src/Reducer/test.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      tutorial:tutorialReducer,
      test:TestReducer
    }, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
