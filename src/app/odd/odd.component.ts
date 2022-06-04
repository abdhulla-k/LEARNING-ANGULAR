import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-odd-componet',
    templateUrl: "./odd.component.html",
    styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
    @Input() number: number;
    
    constructor() { }

    ngOnInit(): void {
        
    }
}