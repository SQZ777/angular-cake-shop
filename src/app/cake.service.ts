import { Injectable } from '@angular/core';
import { Cake } from './cake';
import { CAKES } from './mock-cake';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CakeService {

  constructor() { }

  getCakes(): Observable<Cake[]> {
    return of(CAKES);
  }
}
