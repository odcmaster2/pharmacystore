import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { DrugPageComponent } from './components/pages/drug-page/drug-page.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'search/:searchTerm', component:HomeComponent},
    {path:'tag/:tag', component:HomeComponent},
    {path:'drug/:id', component:DrugPageComponent}
];
