import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth-components/auth/auth.component';
import { LoginComponent } from './auth-components/login/login.component';

const routes: Routes = [
  {path:'signup', component:AuthComponent},
  {path:'login', component:LoginComponent},
  {path:'', redirectTo:'/signup', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
