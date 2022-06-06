import { Component, OnInit } from '@angular/core';
import { Incredient } from '../shared/incredient.model';

import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ ShoppingListService ]
})
export class ShoppingListComponent implements OnInit {
  // incredients: Incredient[] = [
  //   new Incredient( 'Apple', 5 ),
  //   new Incredient( 'Tomate', 10 )
  // ];

  incredients: Incredient[] = [];
  constructor(  private shoppingListService: ShoppingListService ) {}

  ngOnInit(): void {
    this.incredients = this.shoppingListService.getIngredients();
  }

  onIngredientAdded( ingredient: Incredient ) {
    this.shoppingListService.ingredientAdded( ingredient );
  }

}
