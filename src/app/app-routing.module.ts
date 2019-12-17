import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ItemDetailsComponent } from './item-details/item-details.component';
import { HomeComponent } from './home/home.component';
import {AboutComponent} from './about/about.component';
import {FindComponent} from './find/find.component';
import {PerfilComponent} from './perfil/perfil.component';
import {AuthGuard} from './login.guard.spec';
import {SigninComponent} from './signin/signin.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {EditPerfilComponent} from './edit-profile/edit-profile.component';
import {ListacomprasComponent} from './listacompras/listacompras.component';
import {AdminlistComponent} from './adminlist/adminlist.component';

const routes: Routes = [
  {path: '', component: HomeComponent, },
  {path: 'infoItem/:id', component: ItemDetailsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: FindComponent},
  {path: 'perfil', component: PerfilComponent,  canActivate: [AuthGuard]},
  {path: 'login', component: SigninComponent},
  {path: 'shoppingcart', component: ShoppingCartComponent},
  {path: 'profileedit', component: EditPerfilComponent, canActivate: [AuthGuard]},
  {path: 'list', component: ListacomprasComponent, canActivate: [AuthGuard]},
  {path: 'adminList', component: AdminlistComponent, canActivate: [AuthGuard]}
];

@NgModule({
  exports: [
    RouterModule
  ],
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
