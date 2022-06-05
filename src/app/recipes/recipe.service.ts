import { Recipe } from "./recipe.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe( 'A test recipe', 'This is siply a test', 'https://picturetherecipe.com/wp-content/uploads/2020/01/Rogan-Josh-by-PictureTheRecipe-Featured-1-395x500.jpg')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}