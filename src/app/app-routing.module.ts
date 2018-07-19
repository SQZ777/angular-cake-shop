import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CakesComponent } from './cakes/cakes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CakeDetailComponent } from './cake-detail/cake-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'cakes', component: CakesComponent },
  { path: 'detail/:id', component: CakeDetailComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
