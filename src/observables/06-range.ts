/**
 * range(1, 5);
 * Crea un Observable que emite una secuencia de números en base
 * a un rango.
 */


import { of, range, asyncScheduler } from 'rxjs';
 

//const src$ = of(1, 2, 3, 4, 5);
const src$ = range(1, 5, asyncScheduler);
/**
 * El primer argumento del range es la posicion del arreglo donde va a empezar 
 * El segundo argumento es las veces que va a iterar
 */


console.log('inicio');
src$.subscribe(console.log);
console.log('fin');
