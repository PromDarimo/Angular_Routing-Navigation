import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path : "" , redirectTo : "/list", pathMatch : "full"}, //  puting on above for not getting error 
  //and it will return to select list c auto when the url path is emty and just enter 
  {path : "list", component : StudentListComponent},      //  Student List Component
  {path : "detail", component : StudentDetailComponent},  //  Student Detail Component
  {path : "**", component : PageNotFoundComponent} ,      //  page not found and ** is defult angular
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComponent = [StudentListComponent, StudentDetailComponent]; //declare to import in module
