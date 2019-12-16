import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ItemDetailsComponent } from './item-details/item-details.component';
import { HomeComponent } from './home/home.component';
import {AboutComponent} from './about/about.component';
import {FindComponent} from './find/find.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'infoItem/:id', component: ItemDetailsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: FindComponent}
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
