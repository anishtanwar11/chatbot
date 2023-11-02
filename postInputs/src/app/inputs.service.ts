import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { INPUT_URL } from './constants/urls';
import { BehaviorSubject, Observable, tap } from 'rxjs';

const USER_KEY = 'User';
@Injectable({
  providedIn: 'root'
})
export class InputsService {
  private baseUrl = 'http://localhost:5000';
  inputData: any;

  constructor(private http: HttpClient) { }

  userinputs(userInput: any): Observable<any> {
    const url = `${this.baseUrl}/api/enterinput`;
    return this.http.post(url, userInput);
  }

  getInputData(): Observable<any> {
   const url = `${this.baseUrl}/api/getinput`;
    return this.http.get(url);
  }

 
}
