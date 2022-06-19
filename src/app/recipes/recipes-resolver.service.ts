import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Resolve } from "@angular/router";
import { DataStorageService } from "../shared/data-storage.service";

import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";

@Injectable({
    providedIn: 'root'
})
export class RecipeResolverService implements Resolve<Recipe[]> {
    constructor( private dataStorageService: DataStorageService,
                 private recipeServise: RecipeService ) {}

    resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {

        // dont want to fetch again if there is data in recipe service
        const recipes = this.recipeServise.getRecipes();
        if( recipes.length === 0 ) {
            return this.dataStorageService.fetchRecipes();
        } else {
            return recipes;
        }
    }
}