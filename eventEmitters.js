const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', 
()=>{
    console.log(`data received `);
});

customEmitter.on('response', 
()=>{
    console.log(`some other logic `);
});

// first you always listen the event and then  emit the event
customEmitter.emit('response');

