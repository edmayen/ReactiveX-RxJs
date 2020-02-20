import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]: ',  value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.info('completado[obs]')
};

//const obs$ = Observable.create();
const obs$ = new Observable<string>( subs => {

    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    //forzar un error
    //let a = undefined;
    //a.nombre = 'Eduardo';

    subs.complete();
});

obs$.subscribe(observer);

/* obs$.subscribe( 
    resp => console.log('next', resp),
    error => console.warn('error', error),
    () => console.info('completado')
);
 */

