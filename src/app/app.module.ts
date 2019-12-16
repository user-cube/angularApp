import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { AboutComponent } from './about/about.component';
import { FindComponent } from './find/find.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemDetailsComponent,
    AboutComponent,
    FindComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
