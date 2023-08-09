import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroserviceService {

  constructor(private http: HttpClient) { }

  //getRetro

  getRetro(): Observable<any> {
    return this.http.get("http://localhost:3000/posts");

  }

  getPostRetro(data: any): Observable<any> {
    return this.http.post("http://localhost:3000/posts", data)
  }
  getPutRetro(data: any): Observable<any> {
    return this.http.put("http://localhost:3000/posts", data)
  }
  getFactsNow(): Observable<any> {
    return this.http.get("https://catfact.ninja/fact");

  }
  getNameSubmit(name: any): Observable<any> {
    return this.http.get('https://api.genderize.io/?name='+name)
  }
  getDogImages(){
    return this.http.get("https://dog.ceo/api/breeds/image/random")
  }




}