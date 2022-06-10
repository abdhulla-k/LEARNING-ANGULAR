import { Component, OnDestroy, OnInit } from '@angular/core';
import { observable, Observable, Subscription, of } from 'rxjs';
import { map, reduce, filter } from 'rxjs/operators' 

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
    // const customIntervalObservable = Observable<any>.create(observer => {
    //   let count = 0;
    //   setInterval( () => {
    //     observer.next(count);
    //     if( count === 3 ) {
    //       observer.complete()
    //     }
    //     // if( count > 3 ) {
    //     //   observer.error( new Error( 'count is greater thathan 3' ))
    //     // }
    //     count++;
    //   }, 1000 );
    // })

    // this.firstObsSubsctiption = customIntervalObservable.subscribe( data => {
    //   console.log(data);
    // })

    let test1 = of( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 );
    let case1 = test1.pipe(
      filter( x => x % 2 == 0 ),
      reduce(( acc,one ) => acc + one , 0 )
    )
    case1.subscribe( x => console.log(x));
  }

  ngOnDestroy(): void {
      // this.firstObsSubsctiption.unsubscribe()
  }

}
