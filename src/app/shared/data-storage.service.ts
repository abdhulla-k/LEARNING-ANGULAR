import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { exhaustMap, map, pipe, take, tap } from "rxjs";

import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../auth/auth.service";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {
    constructor( private http: HttpClient,
                 private recipeService: RecipeService,
                 private authService: AuthService ) {

    }

    storeRecipes() {
        const recipes = this.recipeService.getRecipes()
        this.http.put( 'https://ng-course-recipe-book-b691f-default-rtdb.firebaseio.com/recipes.json',
                       recipes ).subscribe();
    }

    fetchRecipes() {
        return this.authService.user.pipe( 
            take(1),
            
            // exhaustMap is an rxjs operator. here we are using pipe method form both two observables
            exhaustMap( user => {
                return this.http.get<Recipe[]>( 'https://ng-course-recipe-book-b691f-default-rtdb.firebaseio.com/recipes.json' ,
                {
                    params: new HttpParams().set( 'auth', user.token )
                })
            }),
            map( recipes => {
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
             })
        )
    }
}