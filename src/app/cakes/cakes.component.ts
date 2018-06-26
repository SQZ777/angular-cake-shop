import { Component, OnInit } from '@angular/core';
import {Cake} from '../cake'
import {CAKES} from '../mock-cake'

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css']
})
export class CakesComponent implements OnInit {

  cake: Cake={
    id: 1,
    name:"Chocolate",
    picUrl: require("./imgs/cake.jpg")
  }
  cakes= CAKES
  constructor() { }

  ngOnInit() {
  }

}
