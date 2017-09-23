import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DataServiceService {

  constructor(private http : Http) { }

  validateLogin(jsonData){
    console.log(jsonData);
    var body = jsonData;

    return this.http.post('http://localhost:9099/validate', body).map(
      (res) => res.json()
    );
  }
}
