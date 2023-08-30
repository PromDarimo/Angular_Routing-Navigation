import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeReportComponent } from './employee-report/employee-report.component';

const routes: Routes = [
  
  //  put all path on above path "**" for not getting error 
  { path: "", redirectTo: "/list", pathMatch: "full" },       //it will return to select list compo auto when the url path is empty and just enter 
  { path: "list", component: StudentListComponent },          //  Student List Component
  { path: "detail", component: StudentDetailComponent },      //  Student Detail Component 
  { path: "detail/:id", component: StudentDetailComponent },  //  Optional Paramater path
 
  //Routing Relative: "Children's Path only work at the path that set on it"
  { path: "employee", component: EmployeeComponent,
    children: [
      { path: "employee-detail", component: EmployeeDetailComponent },
      { path: "employee-report", component: EmployeeReportComponent }
    ]
  },
 
  { path: "**", component: PageNotFoundComponent },     //  page not found and ** is defult angular
  //note: every path is need to above the ** path 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComponent = [StudentListComponent, StudentDetailComponent]; //declare to import in module
export const routeComponentEmployee = [EmployeeComponent, EmployeeDetailComponent, EmployeeReportComponent];