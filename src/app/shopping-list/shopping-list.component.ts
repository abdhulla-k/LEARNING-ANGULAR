import { Component, OnInit } from '@angular/core';
import { Incredient } from '../shared/incredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  incredients: Incredient[] = [
    new Incredient( 'Apple', 5 ),
    new Incredient( 'Tomate', 10 )
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded( ingredient: Incredient ) {
    this.incredients.push( ingredient );
  }

}
