const { readFile } = require('fs');

console.log('started first task - file read');


readFile('./content/textFile.txt', 'utf-8', (err, result) => {
    if(err){
        return;
    }
    console.log(result);
    console.log('complete first task - file read');
});

console.log('started next task');