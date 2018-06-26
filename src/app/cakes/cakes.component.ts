import { Component, OnInit } from '@angular/core';
import {Cake} from '../cake'
@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css']
})
export class CakesComponent implements OnInit {

  cake: Cake={
    id: 1,
    name:"Chocolate",
    picUrl: ""
  }
  constructor() { }

  ngOnInit() {
  }

}
