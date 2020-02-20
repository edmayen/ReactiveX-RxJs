import { Observable, Observer, Subscriber } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]: ',  value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.info('completado[obs]')
};

const intervalo$ = new Observable<number>( subs => {
    //crear contador, 1, 2, 3, ..., n
    let i = 0;
    let interval = setInterval( () => {
        //cada segundo
        i ++;
        subs.next(i);
    }, 1000);

    setTimeout(() => {
        subs.complete();
    }, 2500);

    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
        
    }
}); 

let subscrption1 = intervalo$.subscribe(num => {
    console.log('NUM: ', num);
});
let subscrption2 = intervalo$.subscribe(num => {
    console.log('NUM: ', num);
});
let subscrption3 = intervalo$.subscribe(num => {
    console.log('NUM: ', num);
});

subscrption1.add(subscrption2).add(subscrption3);

setTimeout( () => {
    subscrption1.unsubscribe()
    /* subscrption2.unsubscribe()
    subscrption3.unsubscribe() */

    console.log('completado timeout');
    
}, 3000);

