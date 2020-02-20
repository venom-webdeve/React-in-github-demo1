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
import { ApidataService}from './apidata.service';
import { HttpClientModule } from '@angular/common/http';
import { DemoproComponent } from './demopro/demopro.component';
import {FormsModule} from '@angular/forms';
import { NewproductdemoComponent } from './newproductdemo/newproductdemo.component';
import {NewproapiService} from './newproapi.service';

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
    ProductsdetailsComponent,
    DemoproComponent,
    NewproductdemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService,ApidataService,NewproapiService],
  bootstrap: [NewproductdemoComponent]
})
export class AppModule { }
