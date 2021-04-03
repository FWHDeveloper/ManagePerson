import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './crud/list/list.component';
import { DetailsComponent } from './crud/details/details.component';
import { EditComponent } from './crud/edit/edit.component';
const routes: Routes = [
 {path:'list', component:ListComponent},
  {path:'details',component:DetailsComponent},
  {path:'edit',component:EditComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
