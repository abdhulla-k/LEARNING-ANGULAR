import { 
  Component,
  OnDestroy,
  OnInit,
  ViewChild,

} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Incredient } from 'src/app/shared/incredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subsCription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Incredient;
  // @ViewChild( 'nameInput' ) nameInputRef: ElementRef;
  // @ViewChild( 'amountInput' ) amountInputRef: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Incredient>();

  constructor( private slService: ShoppingListService ) { }

  ngOnInit(): void {
    this.subsCription = this.slService.startedEditing.subscribe(
      ( index: number ) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.slService.getIngredient( index );
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    );
  }

  // onAddItem() {
  //   const ingName = this.nameInputRef.nativeElement.value;
  //   const ingAmount = this.amountInputRef.nativeElement.value;
  //   const newIngredient = new Incredient( ingName, ingAmount );
  //   // this.ingredientAdded.emit( newIngredient );
  //   this.slService.addIngredient( newIngredient );
  // }

  onSubmit( form: NgForm ) {
    const value = form.value;
    const newIngredient = new Incredient( value.name, value.amount );

    if( this.editMode) {
      this.slService.updateIngredient( this.editedItemIndex, newIngredient );
      this.editMode = false;
      form.reset()

    } else {
      this.slService.addIngredient( newIngredient );
    }
  }

  onCliear() {
    this.slForm.reset()
    this.editMode = false;
  }

  ngOnDestroy(): void {
      this.subsCription.unsubscribe();
  }

}
