import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularzComponent } from './formularz/formularz.component';
import { ReactiveFormsSampleComponent } from './reactive-forms-sample/reactive-forms-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularzComponent,
    ReactiveFormsSampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
