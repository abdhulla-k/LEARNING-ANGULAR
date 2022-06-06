import { EventEmitter } from "@angular/core";
import { Incredient } from "../shared/incredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe( 
            'sandwich',
            'chicken sandwich',
            'https://www.chicken.ca/wp-content/uploads/2020/09/Chicken-Fine-Herb-Mayo.jpg',
            [
                new Incredient( 'buns', 2 ),
                new Incredient( 'chicken', 100 )
            ]
        ),
        new Recipe(
            'Burger',
            'what else you need to say?',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/1200px-Hamburger_%28black_bg%29.jpg',
            [
                new Incredient( 'buns', 2 ),
                new Incredient( 'Meet', 1 )
            ]
        )
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}