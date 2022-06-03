import { 
  Component, 
  Input, 
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ContentChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements 
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input('srvElement') element: { type: string,name: string,content: string }
  @Input() name: string;
  @ContentChild( 'contentParagraph' ) paragraph: ElementRef;

  constructor() {
    console.log( "constructor called!");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log( "ngOnChanges called!");
    console.log( changes );
  }

  ngOnInit(): void {
    console.log( "ngOnInit called!");
  }

  ngDoCheck(): void {
    console.log( "ngDoCheck called!" );
    // this function will be called during every change detuction run.
    // eg. value change in a property, trigering events like clicked, a time fiered or an observable was resolved.
  }

  ngAfterContentInit(): void {
    console.log( "ngAfterContentInit called!" );
    console.log( 'Text content of paragraph: ' + this.paragraph.nativeElement.textContent );
    // called after content (ng-content) has been projected into view
  }

  ngAfterContentChecked(): void {
    console.log( "ngAfterContentChecked called!" );
    // called every time the project contnent has been checked
  }

  ngAfterViewInit(): void {
    console.log( "ngAfterViewInit called!");
    // called after the component's view ( and chiled view ) has been initialized.
  }

  ngAfterViewChecked(): void {
    console.log( "ngAfterViewChecked called!");
    // called every time the view ( and chiled view ) has been checked.
  }

  ngOnDestroy(): void {
    console.log( "ngOnDestroy called!" );
  }
}
