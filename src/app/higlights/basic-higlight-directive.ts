import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    constructor( private elementRed: ElementRef ) {

    }

    ngOnInit(): void {
        this.elementRed.nativeElement.style.backgroundColor = 'green';
    }
}