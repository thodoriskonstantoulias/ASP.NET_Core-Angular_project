import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({ 
  providedIn: 'root'
})
export class AuthService {
  baseUrl : "https://localhost:5001/api/auth";
  userToken : any;

  constructor(private http : Http) { }

  login(model : any){
      const headers = new Headers({'Content-type' : 'application/json' });
      const options = new RequestOptions({headers : headers});
      this.http.post(this.baseUrl + 'login',model,options).pipe(map((response : Response) =>{
          const user = response.json();
          if (user){
            localStorage.setItem("token" , user.tokenString);
            this.userToken = user.tokenString;
          }
      }));
  }
}
