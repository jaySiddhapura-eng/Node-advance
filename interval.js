console.log('task 1');

setInterval(()=> {
    console.warn('1 second timer ticked [1]');
}, 1000);

setInterval(()=> {
    console.warn('1 second timer ticked [2]');
}, 1000);

setInterval(()=> {
    console.warn('0.5 second timer ticked');
}, 500);

setInterval(()=> {
    console.warn('2 second timer ticked');
}, 2000);

console.log('task 2');