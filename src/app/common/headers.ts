
import { Headers } from '@angular/http';


export const contentHeaders = new Headers();

contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');

export const walletHeaders = new Headers();

let CW_SIGN_UP_TOKEN = JSON.parse(localStorage.getItem('CW_SIGN_UP_TOKEN'));

if ( CW_SIGN_UP_TOKEN ){
  walletHeaders.append('Content-Type', 'application/json');

}
