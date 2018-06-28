import { Component, OnInit } from '@angular/core'
import {Cake} from '../cake'
import {CAKES} from '../mock-cake'

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css']
})
export class CakesComponent implements OnInit {

  cakes= CAKES
  constructor() { }

  ngOnInit() {
  }
  selectedCake: Cake;

  onSelect(cake :Cake) :void{
    this.selectedCake = cake;
  }

}
