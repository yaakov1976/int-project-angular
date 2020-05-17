import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestAreaComponent } from './components/guest-area/guest-area.component';
import { LoginComponent } from './components/login/login.component';
import { UsersDataComponent } from './components/users-data/users-data.component';
import { AuthGuard } from './services/auth.guard';
import { OrderComponent } from './components/order/order.component';
import { AcceptedComponent } from './components/accepted/accepted.component';


const routes: Routes = [
  {path: '', component:GuestAreaComponent },
  {path: 'login', component:LoginComponent},
  {path: 'users', component:UsersDataComponent,canActivate:[AuthGuard] },
  {path: 'order', component:OrderComponent},
  {path: 'accepted', component:AcceptedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
