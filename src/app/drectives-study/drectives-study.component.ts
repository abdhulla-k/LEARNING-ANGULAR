import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drectives-study',
  templateUrl: './drectives-study.component.html',
  styleUrls: ['./drectives-study.component.css']
})
export class DrectivesStudyComponent implements OnInit {
  //numbers: number[] = [ 1, 2, 3, 4, 5 ];
  oddNumbers: number[] = [ 1, 3, 5 ];
  evenNumbers: number[] = [ 2, 4, 6 ];
  onlyOdd: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
