import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipeForm: FormGroup;
  editMode = false;
  id: number;

  constructor( private route: ActivatedRoute,
               private recipeService: RecipeService ) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(
      ( params: Params ) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    )
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDesctiption = '';
    let recipeIngredients = new FormArray([]);

    if( this.editMode ) {
      const recipe = this.recipeService.getRecipe( this.id );
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDesctiption = recipe.description;
      if( 'ingredients' ) {
        for( let ingredient of recipe.ingredient ) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl( ingredient.name, Validators.required ),
              'amount': new FormControl( ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ] )
            })
          )
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl( recipeName, Validators.required ),
      'imagePath': new FormControl( recipeImagePath, Validators.required ),
      'description': new FormControl( recipeDesctiption, Validators.required ),
      'ingredients': recipeIngredients
    })
  }

  getControls() {
    return ( this.recipeForm.get('ingredients') as FormArray ).controls
  }

  onSubmit() {
    console.log( this.recipeForm );
  }

  onAddIncredient() {
    ( this.recipeForm.get( 'ingredients' ) as FormArray ).push(
      new FormGroup({
        'name': new FormControl( null, Validators.required ),
        'amount': new FormControl( null, Validators.required )
      })
    )
  }

}
