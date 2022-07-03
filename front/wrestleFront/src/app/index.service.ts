import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';


const url = "http://localhost:3000/api/techniques";

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  constructor() { }

}