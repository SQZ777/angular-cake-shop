import { Injectable } from '@angular/core';
import { Cake } from './cake';
import { CAKES } from './mock-cake';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class CakeService {

  constructor(private messageService: MessageService) { }

  getCakes(): Observable<Cake[]> {
    this.messageService.add('CakeService: fetched cakes');
    return of(CAKES);
  }

  getCake(id: number): Observable<Cake> {
    this.messageService.add(`CakeService: fetched cake id: ${id}`);
    return of(CAKES.find(cakes => cakes.id === id));
  }
}
