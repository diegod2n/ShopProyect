import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';
import {CheckoutComponent} from './checkout/checkout.component';
import { WeComponent } from './components/we/we.component';
import {IndexComponent} from './index/index.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'appointment', component: AppointmentComponent},
  {path: 'we', component: WeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
