import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { RestaurentDsashComponent } from './restaurent-dsash/restaurent-dsash.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { FactsComponent } from './facts/facts.component';
import { DxTextBoxModule } from 'devextreme-angular';
import { NameDynamicComponent } from './name-dynamic/name-dynamic.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurentDsashComponent,
    FactsComponent,
    NameDynamicComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DxTextBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
