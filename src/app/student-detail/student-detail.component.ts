import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent {
  studentId: number = 0; //for taking id from list 
  constructor(
    private activeRoute: ActivatedRoute,   //to navigate to another page with paramater
    private router : Router                //to navigate to another page
  ) {
  }

  ngOnInit() {
    //snapshot can't refresh the data that's why need to use Observable
    // let selectId = this.activeRoute.snapshot.paramMap.get('id');
    // this.studentId = Number(selectId); //selectId convert to number

    //ParamMap Observable 
    this.activeRoute.paramMap.subscribe((data : ParamMap) => {
      this.studentId = parseInt(data.get("id") || "0"); //Set defult = 0 is for display when not passing any data
    });
  }

  goNext(){
    // this.router.navigate(["/detail", this.studentId + 1]);

    //Relative navigation (if path of routing change it still working normally ex: /detail -> StuDetail)
    //working by Variable on page("this.studentId", because it from detail page);
    this.router.navigate(["..", this.studentId + 1], {relativeTo : this.activeRoute});
  }

  goPrevious(){
    this.router.navigate(["/detail", this.studentId - 1]);
  }

  goBack(){
    this.router.navigate(["/list", {id : this.studentId}]); //optional Paramater 
  }
}
