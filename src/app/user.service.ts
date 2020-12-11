import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url ="http://localhost:3000/users";
  constructor(private http: HttpClient) { }

  createUser(data){
    this.http.post(this.url, {
      restaurentname : data.restaurentname,
      city : data.city,
      address: data.address,
      postalcode: data.postalcode,
      name: data.name,
      contact : data.contact,
      email : data.email,
     
     
    }).toPromise();
  }
  getUser(){
    return this.http.get(this.url)
  }
}




