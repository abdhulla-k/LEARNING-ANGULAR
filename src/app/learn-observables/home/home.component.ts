import { Component, OnDestroy, OnInit } from '@angular/core';
import { observable, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubsctiption: Subscription;
  constructor() { }

  ngOnInit() {

    // this is how to create an observable
    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval( () => {
        observer.next(count);
        if( count === 3 ) {
          observer.complete()
        }
        // if( count > 3 ) {
        //   observer.error( new Error( 'count is greater thathan 3' ))
        // }
        count++;
      }, 1000 );
    })

    this.firstObsSubsctiption = customIntervalObservable.subscribe( data => {
      console.log(data);
    })
  }

  ngOnDestroy(): void {
      this.firstObsSubsctiption.unsubscribe()
  }

}
