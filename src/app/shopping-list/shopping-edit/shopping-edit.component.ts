import { 
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  EventEmitter,
  Output 
} from '@angular/core';

import { Incredient } from 'src/app/shared/incredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild( 'nameInput' ) nameInputRef: ElementRef;
  @ViewChild( 'amountInput' ) amountInputRef: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Incredient>();

  constructor( private slService: ShoppingListService ) { }

  ngOnInit(): void {
  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Incredient( ingName, ingAmount );
    // this.ingredientAdded.emit( newIngredient );
    this.slService.addIngredient( newIngredient );
  }

}
