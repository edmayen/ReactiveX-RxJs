/**
 * Interval y Timer crean Observable que trabajan con intervalos
 * de tiempo
 * Ambos son asincronos
 * interval(1000) => en este ejemplo de llamada el parametro es 
 * es milisegundos 
 */


import { interval, timer } from 'rxjs';


const observer = {
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
}

const hoyEn5 = new Date(); 
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);
console.log(hoyEn5);

const interval$ = interval(1000);
// const timer$ = timer(2000);
// const timer$ = timer(2000, 1000);
const timer$ = timer(hoyEn5);

console.log('inicio');
//  interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('fin');
 