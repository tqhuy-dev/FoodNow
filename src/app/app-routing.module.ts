import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pages/PageNotFound/component/page-not-found/page-not-found.component';
import { AuthGuard } from './guard/auth-guard.service';
import { MainPaigeGuard } from './guard/main-paige-guard.services';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: './pages/Login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: './pages/Register/register.module#RegisterModule'
  },
  {
    path: 'main',
    canActivate: [MainPaigeGuard],
    loadChildren: './pages/Main/main.module#MainModule'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
