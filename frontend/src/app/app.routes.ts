import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { DrugPageComponent } from './components/pages/drug-page/drug-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'search/:searchTerm', component:HomeComponent},
    {path:'tag/:tag', component:HomeComponent},
    {path:'drug/:id', component:DrugPageComponent},
    {path:'cart-page', component:CartPageComponent}
];
