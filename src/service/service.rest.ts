import {Injectable} from '@angular/core';
import {Http,} from '@angular/http';
import 'rxjs/Rx';
import {contentHeaders} from "../app/common/headers";
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";





@Injectable()
export class RestService {


  constructor(public http: Http ,private _router:Router) {

  }

  get(url:string):Observable<any> {

    this.setHeader();

    return this.http.get(url, { headers: contentHeaders } ).map(
      (response) =>
        this.sendResponse(response)

    ).catch(this.handleErrorObservable);
  }


  post(url:string, data?):Observable<any>  {


    return this.http.post(url, data, { headers: contentHeaders }).map(
      (response) => {
        return this.sendResponse(response)
      }

    ).catch(this.handleErrorObservable);
  }


  setHeader() {

    let key = localStorage.getItem('key');
    if (key) {

      let aKey = contentHeaders.get('Authorization');
      if (aKey == null || aKey == undefined || aKey == "") {
        contentHeaders.append('Authorization', 'token ' + key);
      } else {
        contentHeaders.delete('Authorization');
        contentHeaders.append('Authorization', 'token ' + key);
      }
    }
  }



  sendResponse(response){
    return response.json();

  }

  private handleErrorObservable (error: any) {

    if(error.status==401){
      localStorage.clear();
      alert("Wrong username and/or password!")
      location.reload()
      return

    }
    if(error.status==403) {
      localStorage.clear();
      alert("You account has been locked. Please contact us!")
      return
    }
    // In a real world app, we might send the error to remote logging infrastructure
    let errMsg = JSON.parse(error._body)|| '500';
    /******** to check the minimum amount error only for error code 404 ****/
    if(errMsg == "404"){
      let err_obj = JSON.parse(error._body);
      return Observable.throw(err_obj);
    }
    /*********************************************/
    return Observable.throw(errMsg);

  }


}
