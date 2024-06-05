import { Routes } from '@angular/router';
import { AllComponent } from './categories/all/all.component';
import { LoginComponent } from './account/login/login.component';
import { SignUpComponent } from './account/sign-up/sign-up.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './account/user/user.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'categories/all', component: AllComponent //, canActivate: [authGuard]
    },
    {
        path: 'account/login', component: LoginComponent
    },
    {
        path: 'account/sign-up', component: SignUpComponent
    },
    {
        path: 'account/user', component: UserComponent //, canActivate: [authGuard]
    },
    { 
        path: 'categories', redirectTo: 'categories/all', pathMatch: 'full'
    },
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: '**', component: PageNotFoundComponent
    },
];
