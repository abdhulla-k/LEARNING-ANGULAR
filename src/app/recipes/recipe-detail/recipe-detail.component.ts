import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  id: number;
  recipeData: Recipe;

  constructor( private recipeService: RecipeService,
               private route: ActivatedRoute,
               private router: Router ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      ( params: Params ) => {
        this.id = +params['id'];
        this.recipeData = this.recipeService.getRecipe( this.id );
      }
    )
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientToShoppingList( this.recipeData.ingredient );
  }

  onEditRecipe() {
    this.router.navigate( ['edit'], { relativeTo: this.route } );
    // this.router.navigate( [ '../', this.id, 'edit' ], { relativeTo: this.route } ); // can do like this
  }

}
