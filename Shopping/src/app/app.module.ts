import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import{RegisterComponent} from './register/register.component';
import { from } from 'rxjs';
import { DatabindingComponent } from './databinding/databinding.component';
import { IfdemoComponent } from './ifdemo/ifdemo.component';
import { GridecatlogComponent } from './gridecatlog/gridecatlog.component';
import { IterationdemoComponent } from './iterationdemo/iterationdemo.component';
import { CarsdemoComponent } from './carsdemo/carsdemo.component';
import { ConditiondemoComponent } from './conditiondemo/conditiondemo.component';
import { SwitchdemoComponent } from './switchdemo/switchdemo.component';
import { ClassdemoComponent } from './classdemo/classdemo.component';
import { StyledemoComponent } from './styledemo/styledemo.component';
import {HomeComponent} from './home.component';
import { OnlineshopComponent } from './onlineshop/onlineshop.component';
import { MousedemoComponent } from './mousedemo/mousedemo.component';
import { KeydemoComponent } from './keydemo/keydemo.component';
import { MouseovndoutComponent } from './mouseovndout/mouseovndout.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FocusComponent } from './focus/focus.component';
import { ProductsdataComponent } from './productsdata/productsdata.component';
import { ProductsfilterComponent } from './productsfilter/productsfilter.component';
import { DatademoComponent } from './datademo/datademo.component';
import { FilterdemoComponent } from './filterdemo/filterdemo.component';
import { ParentdemoComponent } from './parentdemo/parentdemo.component';
import { ChilddemoComponent } from './childdemo/childdemo.component';
import{SentencesCasePipe} from './sentencescase.pipes';
import { TemplateformComponent } from './templateform/templateform.component';
import { TemplatedemoComponent } from './templatedemo/templatedemo.component';
import { InputvalidationComponent } from './inputvalidation/inputvalidation.component';
import { CustomvalidationComponent } from './customvalidation/customvalidation.component';
import { DynamicvalidationComponent } from './dynamicvalidation/dynamicvalidation.component';
import { ReactivedemoComponent } from './reactivedemo/reactivedemo.component';
import { NestedformComponent } from './nestedform/nestedform.component';
import { UserrestdemoComponent } from './userrestdemo/userrestdemo.component';
import {HttpClientModule} from '@angular/common/http'
import { RestapicallService } from './restapicall.service';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DatabindingComponent,
    IfdemoComponent,
    GridecatlogComponent,
    IterationdemoComponent,
    CarsdemoComponent,
    ConditiondemoComponent,
    SwitchdemoComponent,
    ClassdemoComponent,
    StyledemoComponent,
    HomeComponent,
    OnlineshopComponent,
    MousedemoComponent,
    KeydemoComponent,
    MouseovndoutComponent,
    ParentComponent,
    ChildComponent,
    FocusComponent,
    ProductsdataComponent,
    ProductsfilterComponent,
    DatademoComponent,
    FilterdemoComponent,
    ParentdemoComponent,
    ChilddemoComponent,
    SentencesCasePipe,
    TemplateformComponent,
    TemplatedemoComponent,
    InputvalidationComponent,
    CustomvalidationComponent,
    DynamicvalidationComponent,
    ReactivedemoComponent,
    NestedformComponent,
    UserrestdemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RestapicallService],
  bootstrap: [UserrestdemoComponent]
})
export class AppModule { }
