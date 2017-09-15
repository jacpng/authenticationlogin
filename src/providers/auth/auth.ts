import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthProvider {
	token: any;

  constructor(public http: Http ,private storage: Storage) {
    console.log('Hello AuthProvider Provider');
  }

    login(credentials){
 
    return new Promise((resolve, reject) => {
    	 this.storage.get('token').then((value) => {
 
            this.token = value;
 
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
 
        this.http.post('https://mysterious-beach-83937.herokuapp.com/login', JSON.stringify(credentials), {headers: headers})
          .subscribe(res => {
 
            let data = res.json();
            this.token = data.token;
            this.storage.set('token', data.token);
            resolve(data);
 
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
 
    });
 
  }

)
}}