import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {

  constructor(public _http: Http) { }

  public _getUsers() {
   return this._http.get('/api/getusers')
      .map(data => data.json());
  }

  public saveUser(f,file) {
    var creds = {
      fields: {
        name: f.value.name,
        email: f.value.email,
        date: f.value.date,
        file : file,
        userId: f.value.userId
      }
    };


    let headers = new Headers();
    headers.append('Content-Type', 'application/json');


      return  this._http.post('/api/saveuserprofile', JSON.stringify(creds), {
      headers : headers
      })
      .map(res => res.json());
  }

}
