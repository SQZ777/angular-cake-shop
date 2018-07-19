import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Cake } from '../cake';
import { CakeService } from '../cake.service';
@Component({
  selector: 'app-cake-detail',
  templateUrl: './cake-detail.component.html',
  styleUrls: ['./cake-detail.component.css']
})
export class CakeDetailComponent implements OnInit {
  @Input() cake: Cake;

  constructor(
    private cakeService: CakeService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getCake();
  }

  // tslint:disable-next-line:member-ordering
  isNeedEditting = true;

  editStatus() {
    this.isNeedEditting = !this.isNeedEditting;
    console.log(this.isNeedEditting);
  }

  getCake(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cakeService.getCake(id)
      .subscribe(cake => this.cake = cake);
  }

  goBack(): void {
    this.location.back();
  }

}
