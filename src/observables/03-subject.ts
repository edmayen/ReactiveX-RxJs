import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]: ',  value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.info('completado[obs]')
};

const intervalo$ = new Observable<number>( subs => {
    const intervalID = setInterval(() => subs.next(Math.random()), 3000);

    return () => {
        clearInterval( intervalID );
        console.log('Intervalo destruido!');
        
    };
});

/**  
 * 1. Casteo múltiple
 * 2. También es un observer
 * 3. Next, error y complete 
**/

const subject$ = new Subject();
const intervalSubject = intervalo$.subscribe( subject$ );

/* const sub1 = intervalo$.subscribe( rnd => {
    console.log('Random1: ', rnd);
});
const sub2 = intervalo$.subscribe( rnd => {
    console.log('Random2: ', rnd);
}); */


const sub1 = subject$.subscribe( observer);
const sub2 = subject$.subscribe( observer);

setTimeout( () => {
   subject$.next(10);
   subject$.complete(); 
   intervalSubject.unsubscribe();
}, 3500);
