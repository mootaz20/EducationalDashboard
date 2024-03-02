import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '' , component: DashboardComponent},
  {path: 'details' , component: DetailsComponent},
  {path: 'contact' , component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
