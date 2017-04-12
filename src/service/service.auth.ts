import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {RestService} from "./service.rest";
import {Http} from "@angular/http";
import {contentHeaders} from "../app/common/headers";



/*
 * Service for socail authentication, using ng2-ui-auth
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
        console.log('awesome',result)
        if (result.token) {
          console.log('------------>')
          this.route.navigate(["/dashboard"])
          localStorage.setItem('key',JSON.stringify(result.token))
          this.setCookie('token',result.token,2)
        }
        // else{
        //   this.route.navigate([''])
        // }
        // this.data = result;
        // this.auth_token = this.data.key;
        // localStorage.setItem('key',  this.auth_token );
        // let csrf =this._restService.getCookie("csrftoken")
        //
        // /* Get user detail for current logged in session by token returned from the above service */
        // this._restService.get( '').subscribe(
        //   (result) =>{
        //     console.log("result",result)
        //     // //Saved user object inside localStorage for access across other components
        //     // localStorage.setItem('loggedInUser',JSON.stringify(this.user_details));
        //     //  EmitterService.get("loggedInUser").emit(result);
        //     // // EmitterService.get("isUserLoggedIn").emit(true);
        //     //     console.log("aerer",result)
        //     //  EmitterService.get("isSuperuser").emit(this.user_details['is_superuser'])
        //     //
        //     //   if(this.user_details['is_superuser']) {
        //     //     this.route.navigate(["/Home"])
        //     //   }
        //     //   else{
        //     //     console.log('dashboard')
        //     //     this.route.navigate(["/dashboard"])
        //     //   }
        //   });
      }, (err)=>{
        // console.log("aerer",err)
        // console.log("=================", err.status)
        // EmitterService.get("signUpResponse").emit(err);

      })
  }




  setCookie(name: string, value: string, expireDays: number, path: string = "") {
    let d:Date = new Date();
    d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
    let expires:string = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + "; " + expires + (path.length > 0 ? "; path=" + path : "");
  }

  logout(){
    // Removes logged in user details from Local Resources
    //
    // this._restService.get('').subscribe(
    //   result=>{
    //     localStorage.clear();
    //
    // }
   // );

    // Clear the Authorization key from request headers
    // contentHeaders.delete('Authorization');
    localStorage.clear();
    // Clear the cookies
    // this.setCookie('token', '', -1);
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++)
      this.setCookie(cookies[i].split("=")[0],'',-1,'/');




    this._router.navigate(['/']);

  }
  // getUser(){
  //   console.log("user")
  //   return JSON.parse(localStorage.getItem('loggedInUser'))
  // }



}
