import { of } from 'rxjs';


//const obs$ = of(1, 2, 3, 4, 5, 6);
const obs$ = of<number>(...[1, 2, 3, 4, 5, 6], 2, 3, 4, 5);
// const obs$ = of([1, 2], {a:1, b:2}, function(){}, true, Promise.resolve(true));

console.log('Inicio del obs$');

obs$.subscribe( 
    next => {console.log('Next:', next);},
    null,
    () => console.log('Terminamos!')
    
);

console.log('Fin del obs$');
