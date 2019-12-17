import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { LoginPartialComponent } from './login-partial/login-partial.component';
import { CartPartialComponent } from './cart-partial/cart-partial.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { FindComponent } from './find/find.component';
import {AuthInterceptor} from './login/authconfig.interceptor';
import { PerfilComponent } from './perfil/perfil.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import {EditPerfilComponent} from './edit-profile/edit-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemDetailsComponent,
    LoginPartialComponent,
    CartPartialComponent,
    AboutComponent,
    FindComponent,
    PerfilComponent,
    SignupComponent,
    SigninComponent,
    ShoppingCartComponent,
    EditPerfilComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
