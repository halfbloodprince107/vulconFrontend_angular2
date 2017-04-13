import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {RestService} from "./service.rest";
import {Http} from "@angular/http";
import {contentHeaders} from "../app/common/headers";



/*
 * Service for social authentication, using ng2-ui-auth
 */
@Injectable()
export class AuthService {
  public data : any;
  public auth_token:string;
  public user_details:Object={};
  constructor(public _http: Http,public _restService: RestService,private _router:Router,private route:Router) {}


  login(value){

    let dataObj = {
      email: value._user,
      password: value._password
    }

    let dataObj1 = JSON.stringify(dataObj)

    /* Stores email address and other details(if required)into Local Storage for multiple access across components */
    this._restService.post('https://reqres.in/api/login', dataObj1).subscribe(
      (result) =>{
        if (result.token) {
          localStorage.setItem('key',JSON.stringify(result.token))
          this.setCookie('token',result.token,2)
          this._restService.get("https://reqres.in/api/users/2").subscribe(res=> {
            localStorage.setItem('userData', JSON.stringify(res.data))
            this.route.navigate(["/dashboard"])
          })
        }

      }, (err)=>{

      })
  }




  setCookie(name: string, value: string, expireDays: number, path: string = "") {
    let d:Date = new Date();
    d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
    let expires:string = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + "; " + expires + (path.length > 0 ? "; path=" + path : "");
  }

  logout(){

    localStorage.clear();
    // Clear the cookies
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++)
      this.setCookie(cookies[i].split("=")[0],'',-1,'/');

    this._router.navigate(['/']);

  }



}
