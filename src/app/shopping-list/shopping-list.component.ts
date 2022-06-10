import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Incredient } from '../shared/incredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  // incredients: Incredient[] = [
  //   new Incredient( 'Apple', 5 ),
  //   new Incredient( 'Tomate', 10 )
  // ];

  incredients: Incredient[] = [];
  private subscription: Subscription; 
  constructor(  private slService: ShoppingListService ) {}

  ngOnInit(): void {
    this.incredients = this.slService.getIngredients();
    this.subscription = this.slService.ingredientChanged.subscribe(
      ( ingredient: Incredient[] ) => {
        this.incredients = ingredient;
      }
    )
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe()
  }
}
