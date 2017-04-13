import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/service.auth";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private  authservice:AuthService) { }

  ngOnInit() {
  }
  logoutUser(){
    this.authservice.logout()

}
}
