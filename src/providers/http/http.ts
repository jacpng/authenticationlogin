import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { AuthProvider } from '../auth/auth';

import 'rxjs/add/operator/map';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class HttpProvider {


  constructor(public http: Http, public authService: AuthProvider) {
    console.log('Hello HttpProvider Provider');
  }

  getCategory(){
  	return this.http.get("https://mysterious-beach-83937.herokuapp.com/categories")
  	.map(res => res.json())
  }


  getCoach(){
  	return this.http.get("https://mysterious-beach-83937.herokuapp.com/coaches")
  	.map(res => res.json())
  }

  getHired(){
    return new Promise((resolve, reject) => {
 
      let headers = new Headers();
      headers.append('Authorization','Bearer '+ this.authService.token);
 
      this.http.get('https://mysterious-beach-83937.herokuapp.com/loggedInCoach', {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }

}
