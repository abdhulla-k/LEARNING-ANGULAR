import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {
    constructor( private http: HttpClient,
                 private recipeService: RecipeService ) {

    }

    storeRecipes() {
        const recipes = this.recipeService.getRecipes()
        this.http.put( 'https://ng-course-recipe-book-b691f-default-rtdb.firebaseio.com/recipes.json',
                       recipes ).subscribe();
    }

    fetchRecipes() {
        return this.http.get<Recipe[]>('https://ng-course-recipe-book-b691f-default-rtdb.firebaseio.com/recipes.json')
         .pipe( map( recipes => {
            return recipes.map( recipe => {
                // if there are no ingredients for a recipe, add an empty array
                return { 
                    ...recipe,
                    ingredient: recipe.ingredient ? recipe.ingredient : [] 
                };
            });
         }),
         tap( recipe => {
            this.recipeService.setRecipes( recipe );
         }))
    }
}