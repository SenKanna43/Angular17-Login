import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Login } from '../models/login.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  http = inject(HttpClient)

  constructor() { }

  apiUrl = 'https://fakestoreapi.com/'

  // login api
  login(obj: Login): Observable<any> {
    return this.http.post(`${this.apiUrl}auth/login`, obj)
  }
} 
