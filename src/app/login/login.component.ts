import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/service.auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username:any = "";
  public password:any = "";

  constructor(private  authservice:AuthService) { }

  ngOnInit() {
  }
  loginUser(){

    let obj ={
      _user:this.username,
      _password:this.password
    }
    this.authservice.login(obj)
  }

}
