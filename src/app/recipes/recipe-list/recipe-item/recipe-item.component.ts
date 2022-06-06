import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';
import { Recipe } from '../../recipe.model';

import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input('inputRecipe') recipe: Recipe;
  // @Output() recipeSelected = new EventEmitter<void>();

  constructor( private recipeService: RecipeService ) { }

  ngOnInit(): void {
  }

  onSelected( data: Recipe ) {
    // this.recipeSelected.emit( );
    this.recipeService.recipeSelected.emit( this.recipe );
  }
}
