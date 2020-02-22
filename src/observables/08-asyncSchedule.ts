/**
 * asyncScheduler
 * Este no crea un Observable, crea una subscripcion
 */


import { asyncScheduler } from 'rxjs';

// setTimeout {() => { }, 3000};
// setInterval {() => { }, 3000};


const saludar = () => console.log('Hola Mundo');
const saludar2 = nombre => console.log(`Hola ${ nombre }`);


// asyncScheduler.schedule(saludar, 2000);
// asyncScheduler.schedule(saludar2, 2000, 'Eduardo');

const subs = asyncScheduler.schedule(function(state){
    console.log('state: ', state);
    this.schedule(state + 1, 1000);
}, 3000, 0);

/*  setTimeout(() => {
    subs.unsubscribe();
    console.log('unsubcribe');
}, 6000); */

asyncScheduler.schedule(() => {
    subs.unsubscribe(); 
    console.log('unsubcribe');
}, 6000);