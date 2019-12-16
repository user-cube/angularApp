import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { LoginPartialComponent } from './login-partial/login-partial.component';
import { CartPartialComponent } from './cart-partial/cart-partial.component';
import {FormsModule} from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { FindComponent } from './find/find.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemDetailsComponent,
    LoginPartialComponent,
    CartPartialComponent,
    AboutComponent,
    FindComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
