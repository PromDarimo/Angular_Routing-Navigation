import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {

  visitedId : number = 0; //from id stu from detail page

  data : IUser []= [
    { "id": 1, "name": "Isuzu", "age": 18, "gender": "female" },
    { "id": 2, "name": "Batman", "age": 20, "gender": "male" },
    { "id": 3, "name": "Aquaman", "age": 19, "gender": "male" },
    { "id": 4, "name": "Green Lantern", "age": 22, "gender": "male" },
    { "id": 5, "name": "The Flash", "age": 18, "gender": "male" }
  ]

  constructor(
    private router: Router,
    private ActivatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.ActivatedRoute.paramMap.subscribe((data : ParamMap) => {
      this.visitedId = parseInt(data.get("id") || "-1");
    });
  }

  //inject router
  goToDeatil(dataSelected : any) {
    this.router.navigate(["/detail", dataSelected]);
  }

  //check condition class 
  checkHightLight(studentId : number){
    return studentId === this.visitedId ; //color changing only when studentId(list) == visitedId(detail)
  }
}
export interface IUser {
  id : number,
  name : string,
  age : number,
  gender : string,
}
