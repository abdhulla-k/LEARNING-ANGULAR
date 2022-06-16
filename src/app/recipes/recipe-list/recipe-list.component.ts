import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';

import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>()
  // recipes: Recipe[] = [
  //   new Recipe( 'A test recipe', 'This is siply a test', 'https://picturetherecipe.com/wp-content/uploads/2020/01/Rogan-Josh-by-PictureTheRecipe-Featured-1-395x500.jpg')
  // ];
  recipes: Recipe[] = []
  
  constructor( private recipeService: RecipeService,
               private router: Router,
               private routes: ActivatedRoute ) {

               }

  ngOnInit(): void {
    this.recipeService.recipeChanged.subscribe(
      ( data: Recipe[] ) => {
        this.recipes = data;
      }
    )
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate( ['new'], { relativeTo: this.routes } );
  }

  // onRecipeSelected( recipe: Recipe ) {
  //   this.recipeWasSelected.emit( recipe );
  // }

}
