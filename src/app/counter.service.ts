export class CounterService {
    ActiveToInactiveCounter = 0;
    inActiveToActiveCounter = 0;

    incrimentActiveToInactive() {
        this.ActiveToInactiveCounter++;
        console.log( `inactive to active : ${this.ActiveToInactiveCounter}` );
    }

    incrimentinactiveToActive() {
        this.inActiveToActiveCounter++;
        console.log( `inactive to active : ${this.inActiveToActiveCounter}` );
    }
}