import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  apiUrl = 'https://onixinstapp.herokuapp.com/api/';

  constructor(private http: Http) {}

  getPosts(){
    return this.http.get(this.apiUrl+'post/').map((res:Response) => res.json());
  }

  getPost(id){
    return this.http.get(this.apiUrl+'post/'+id).map((res:Response) => res.json());
  }

  getUser(id){
    return this.http.get(this.apiUrl+'user/'+id).map((res:Response) => res.json());
  }

  getGallery(){
    return this.http.get(this.apiUrl+'user/gallery').map((res:Response) => res.json());
  }

  getUsers(){
    return this.http.get(this.apiUrl+'user/following').map((res:Response) => res.json());
  }

}
