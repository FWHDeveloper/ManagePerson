import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }     from './app.component';

import { ListComponent }    from './crud/list/list.component';
import { DetailsComponent } from './crud/details/details.component';
import { EditComponent }    from './crud/edit/edit.component';

import{FormsModule}         from '@angular/forms';
import{CrudService}         from './crud/Service/crud.service';
import{HttpClientModule}    from '@angular/common/http';

@NgModule({
 declarations: [
  AppComponent,
  ListComponent,
  DetailsComponent, 
  EditComponent],
  
  imports: [
    BrowserModule,  AppRoutingModule , FormsModule, HttpClientModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
