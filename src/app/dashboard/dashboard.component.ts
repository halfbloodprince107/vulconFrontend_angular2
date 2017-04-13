import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  public uId:any = "";
  public fName:any = "";
  public lName:any = "";
  public email:any = "";
  constructor() { }

  ngOnInit() {

    var userData = JSON.parse(localStorage.getItem('userData'));
    this.uId = userData.id;
    this.fName = userData.first_name;
    this.lName = userData.last_name;
    this.email = userData.avatar;




  }

}
