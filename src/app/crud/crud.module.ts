import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CrudRoutingModule } from './crud-routing.module';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [ListComponent, DetailsComponent, EditComponent, DeleteComponent],
  imports: [
    CommonModule,
    CrudRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class CrudModule { }
