import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public user_name:any = "";
  constructor() { }

  ngOnInit() {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.user_name = currentUser.username; // your token
    console.log(this.user_name, "=====0000000000000000")
  }

}
