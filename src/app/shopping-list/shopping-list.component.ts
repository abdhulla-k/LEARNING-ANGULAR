import { Component, OnInit } from '@angular/core';
import { Incredient } from '../shared/incredient.model';

import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  // incredients: Incredient[] = [
  //   new Incredient( 'Apple', 5 ),
  //   new Incredient( 'Tomate', 10 )
  // ];

  incredients: Incredient[] = [];
  constructor(  private slService: ShoppingListService ) {}

  ngOnInit(): void {
    this.incredients = this.slService.getIngredients();
    this.slService.ingredientChanged.subscribe(
      ( ingredient: Incredient[] ) => {
        this.incredients = ingredient;
      }
    )
  }
}
