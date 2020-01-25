import { SearchComponent } from './search/search.component';

import{HomeComponent} from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HrhelpdeskComponent } from './hrhelpdesk/hrhelpdesk.component';
import { LearningComponent } from './learning/learning.component';
import { PayrollComponent } from './payroll/payroll.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CategorieslistComponent } from './categorieslist/categorieslist.component';
import { ProductslistComponent } from './productslist/productslist.component';


const routes: Routes = [
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"profile",component:ProfileComponent},
  {path:"hr", component:HrhelpdeskComponent},
  {path:"learning", component:LearningComponent},
  {path:"payroll", component:PayrollComponent},
  {path:"search/:id/:name/:price", component:SearchComponent},
  {path:"categories", component:CategorieslistComponent},
  {path:"categories/:id", component:ProductslistComponent},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
