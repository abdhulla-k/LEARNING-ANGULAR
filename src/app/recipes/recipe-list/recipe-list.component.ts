import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipes: Recipe[] = [
    new Recipe( 'A test recipe', 'This is siply a test', 'https://picturetherecipe.com/wp-content/uploads/2020/01/Rogan-Josh-by-PictureTheRecipe-Featured-1-395x500.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected( recipe: Recipe ) {
    this.recipeWasSelected.emit( recipe );
  }

}
