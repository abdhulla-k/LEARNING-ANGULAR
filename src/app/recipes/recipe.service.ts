import { Injectable } from "@angular/core";


import { Recipe } from "./recipe.model";
import { Incredient } from "../shared/incredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class RecipeService {
    recipeChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [];
    // private recipes: Recipe[] = [
    //     new Recipe( 
    //         'sandwich',
    //         'chicken sandwich',
    //         'https://www.chicken.ca/wp-content/uploads/2020/09/Chicken-Fine-Herb-Mayo.jpg',
    //         [
    //             new Incredient( 'buns', 2 ),
    //             new Incredient( 'chicken', 100 )
    //         ]
    //     ),
    //     new Recipe(
    //         'Burger',
    //         'what else you need to say?',
    //         'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/1200px-Hamburger_%28black_bg%29.jpg',
    //         [
    //             new Incredient( 'buns', 2 ),
    //             new Incredient( 'Meet', 1 )
    //         ]
    //     )
    // ];

    constructor( private slService: ShoppingListService ) {}

    setRecipes( recipe: Recipe[] ) {
        this.recipes = recipe;
        this.recipeChanged.next( this.recipes.slice() );
    }

    getRecipe( index: number ) {
        return this.recipes[index];
    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientToShoppingList( ingredient: Incredient[] ) {
        this.slService.addIngredients( ingredient );
    }

    addRecipe( recipe: Recipe ) {
        this.recipes.push( recipe );
        this.recipeChanged.next( this.recipes.slice() );
    }

    updateRecipe( index: number, recipe: Recipe ) {
        this.recipes[index] = recipe;
        this.recipeChanged.next( this.recipes.slice() );
    }

    deleteRecipe( index: number ) {
        this.recipes.splice( index, 1 );
        this.recipeChanged.next( this.recipes.slice() );
    }
}