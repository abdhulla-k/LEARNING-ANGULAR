import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input('inputRecipe') recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();
  elementData: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  onSelected( data: Recipe ) {
    this.elementData = data;
    this.recipeSelected.emit( );
  }
}
