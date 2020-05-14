import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ThemeOneComponent} from './theme-one/theme-one.component';
import {ThemeTwoComponent} from './theme-two/theme-two.component';


const routes: Routes = [
  {
    component: ThemeOneComponent,
    path: ''
  },
  {
    component: ThemeTwoComponent,
    path: 'themetwo'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
