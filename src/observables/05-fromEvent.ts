/**
 * fromEvent<Event>(document, 'scroll');
 * Nos permite crear Observables en base a un EventTarget. 
 * En este caso el eventTarget es el document y solo se 
 * quiere saber los eventos que tienen que ver con el Scroll. 
 */

import { fromEvent } from 'rxjs';

/**
 * Eventos del DOM
*/ 
const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
   next: val => console.log('next: ', val)
   
}

src1$.subscribe(({x, y}) => {
   console.log(x, y);
});
src2$.subscribe(evento => {
   console.log(evento.key);
   
});