import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HrhelpdeskComponent } from './hrhelpdesk/hrhelpdesk.component';
import { ProfileComponent } from './profile/profile.component';
import { LearningComponent } from './learning/learning.component';
import { PayrollComponent } from './payroll/payroll.component';
import { SearchComponent } from './search/search.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CategorieslistComponent } from './categorieslist/categorieslist.component';
import { ProductslistComponent } from './productslist/productslist.component';
import {DataService}from './data.service';
import { ProductsdetailsComponent } from './productsdetails/productsdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HrhelpdeskComponent,
    ProfileComponent,
    LearningComponent,
    PayrollComponent,
    HomeComponent,
    SearchComponent,
    NotfoundComponent,
    CategorieslistComponent,
    ProductslistComponent,
    ProductsdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
