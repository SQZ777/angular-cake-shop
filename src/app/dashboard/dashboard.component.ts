import { Component, OnInit } from '@angular/core';
import { Cake } from '../cake';
import { CakeService } from '../cake.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cakes: Cake[] = [];

  constructor(private cakeService: CakeService) {
  }
  ngOnInit() {
    this.getCakes();
  }

  getCakes(): void {
    this.cakeService.getCakes()
      .subscribe(cakes => this.cakes = cakes.slice(1, 3));
  }

}
