const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (ARG1, ARG2)=>{
    console.log('listening for response');
    console.log('arg1 : '+ ARG1);
    console.log('arg2 : '+ ARG2);
});

customEmitter.on('response', ()=>{
    console.log('listening to response');
});

customEmitter.emit('response', 'argument1', 'argument2');