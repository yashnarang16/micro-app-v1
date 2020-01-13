import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'button', component: ButtonComponent },
  { path: 'card', component: CardComponent },
  { path: '', redirectTo: 'button', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
